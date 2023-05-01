import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'


const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar tomate', completed: false },
  { text: 'Cortar pepino', completed: false },
  { text: 'Cortar nuevo', completed: false },
];

function App() {
  return (
    /**React necesita que se envíe una sola etiqueta por componente */
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
