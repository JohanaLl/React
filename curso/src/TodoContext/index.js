import React from 'react';
import { useLocalStorage } from './useLocalStorage';

//createContext crea el contexto
const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
    const [searchValue, setSearchValue] = React.useState('');
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

    return(
        //Todo lo que está por dentro de value es lo que se expone del componente del contexto
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodo,
            deletedTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }