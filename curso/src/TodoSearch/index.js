import React from "react";
import './TodoSearch.css';

function TodoSearch (props) {
    /**Cada vez que se cambia el estado de un componente este vuelve a renderizarse
     */
    return (
        <input 
            placeholder="Cortar cebolla" 
            className="TodoSearch"
            value={props.searchValue}
            onChange={(event) => {
                props.setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch }