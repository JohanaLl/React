import React from "react";
import './TodoSearch.css';

function TodoSearch () {
    /**searchValue -- estado
     * setSearchValue -- función modificadora del estado
     * Valor inicial del estado React.useState('')*/
    const [searchValue, setSearchValue] = React.useState('');
    console.log('Los usuarios buscan todos de ', searchValue);
    /**Cada vez que se cambia el estado de un componente este
     * vuelve a renderizarse
     */
    return (
        <input 
            placeholder="Cortar cebolla" 
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch }