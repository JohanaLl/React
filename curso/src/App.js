import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar tomate', completed: false },
  { text: 'Cortar pepino', completed: false },
  { text: 'Cortar nuevo', completed: false },
  { text: 'Usar esatados derivados', completed: true },
];

// Single page application, en APP se renderizan todos los componente
// que componen la application
function App() {
  //Estados
  const [todos, setTodos] = useState(defaultTodos);
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
  const estadoTodos = !todos.completed
  return (
    /**React necesita que se envíe una sola etiqueta por componente */
    <>
      {/* Primera parte de la aplicacion */}
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      /> 
      {/* Buscador */}
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      {/* Lista de TODOs */}
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            estado={estadoTodos}/>
        ))}
      </TodoList>
      {/* Boton de la aplicacion */}
      <CreateTodoButton/>
    </>
  );
}

export default App;
