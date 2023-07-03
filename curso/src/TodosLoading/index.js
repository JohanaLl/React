import React from "react";
import './TodosLoading.css';

function TodosLoading () {
    /**Cada vez que se cambia el estado de un componente este vuelve a renderizarse
     */
    return (
        <div className="LoadingTodo-container">
          <span className="LoadingTodo-completeIcon"></span>
          <p className="LoadingTodo-text"></p>
          <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export { TodosLoading }