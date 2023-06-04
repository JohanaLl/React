import React from "react";
import './TodoList.css';

// children recibe todas las props y elementos que se le envíen al componente
// en este caso recibe el todoItem y todos los textos del todoItem
function TodoList(props) {
    return (
        <section>
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }