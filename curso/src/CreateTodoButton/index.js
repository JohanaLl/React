import React from "react";
import './CreateTodoButton.css'
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {

    //Manda las variables para la modioficacion de ese estado con el useContext
    const {setOpenModal} = React.useContext(TodoContext);

    return(
        <button 
            className="CreateTodoButton"
            onClick={
                () => {
                    //En este caso la funcion recibe el estado
                    setOpenModal(state => !state)
                }
            }
        >+</button>
    );
}

export { CreateTodoButton }