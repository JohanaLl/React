import React from "react";
import'./TodoCounter.css';

function TodoCounter(props) {
    let h1;
    if (props.completed === props.total) {
        h1 =    <h1 className="TodoCounter"> 
                    ¡Felicitaciones!
                </h1>
    } else {
        h1 =    <h1 className="TodoCounter"> 
                    Has completado 
                    <span> {props.completed} </span> 
                    de <span> {props.total} </span>TODOs
                </h1>
    }
    return (
       <>
         {h1}
       </>
    );
}

export { TodoCounter };