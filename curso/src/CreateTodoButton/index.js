import React from "react";
import './CreateTodoButton.css'
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {

    //Manda las variables para la modioficacion de ese estado con el useContext
    const {setOpenModal, openModal} = React.useContext(TodoContext);

    return(
        <button 
            className="CreateTodoButton"
            onClick={
                () => {
                    console.log(openModal);
                    setOpenModal(!openModal)
                }
            }
        >+</button>
    );
}

export { CreateTodoButton }