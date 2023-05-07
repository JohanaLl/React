import React from 'react';
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
];

// Single page application, en APP se renderizan todos los componente
// que componen la application
function App() {
  return (
    /**React necesita que se envíe una sola etiqueta por componente */
    <>
      {/* Primera parte de la aplicacion */}
      <TodoCounter completed={16} total={25} /> 
      {/* Buscador */}
      <TodoSearch />
      {/* Lista de TODOs */}
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      {/* Boton de la aplicacion */}
      <CreateTodoButton/>
    </>
  );
}

export default App;
