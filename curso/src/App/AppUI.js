import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deletedTodo
}) {
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
                onComplete={() => completedTodo(todo.text)}
                onDelete={() => deletedTodo(todo.text)}/>
            ))}
          </TodoList>
          {/* Boton de la aplicacion */}
          <CreateTodoButton/>
        </>
      );
}

export { AppUI }