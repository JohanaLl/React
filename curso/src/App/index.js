import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI'

// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar tomate', completed: false },
//   { text: 'Cortar pepino', completed: false },
//   { text: 'Cortar nuevo', completed: false },
//   { text: 'Usar esatados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))


// Single page application, en APP se renderizan todos los componente
// que componen la application

function App() {

  //Estados
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);
  /**searchValue -- estado
 * setSearchValue -- función modificadora del estado
 * Valor inicial del estado React.useState('')*/
  const [searchValue, setSearchValue] = useState('');
  console.log('Los usuarios buscan todos de ', searchValue);

  //Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })



  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deletedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  // console.log("Log 1");
  /**Cuando la función useEffect no tiene más argumentos, lo que está dentro de la funcón
   * se va a ejecutar siempre al final de cada render
   */
  // React.useEffect(() => {
  //   console.log("Log 2");
  // })

  /**Cuando la función useEffect tiene como segundo argumento un array vacío la función solo se va a 
   * ejecutar la primera vez del render, solo se ejecuta una sola vez
 */
  // React.useEffect(() => {
  //   console.log("Log 2");
  // }, [])

  /**Cuando la función useEffect tiene como segundo argumento un array con información, quiere decir que se 
   * ejecutará la primera vez del render y adicionalmente cada vez que se cambie el estado derivado que se 
   * pasó como parámetro en el array en este caso completedTodos
  */
  // React.useEffect(() => {
  //   console.log("Log 2");
  // }, [completedTodos])
  // console.log("Log 3");

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completedTodo={completedTodo}
      deletedTodo={deletedTodo}
    />
  );
}

export default App;
