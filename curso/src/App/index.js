import React, { useState } from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';

// Single page application, en APP se renderizan todos los componente
// que componen la application

function App() {

  // console.log("Log 1");
  /**Cuando la función useEffect no tiene más argumentos, lo que está dentro de la funcón
   * se va a ejecutar siempre al final de cada render
   */
  // React.useEffect(() => {
  //   console.log("Log 2");
  // })

  /**Cuando la función useEffect tiene como segundo argumento un array vacío la función solo se va a 
   * ejecutar la primera vez del render, solo se ejecuta una sola vez
 */
  // React.useEffect(() => {
  //   console.log("Log 2");
  // }, [])

  /**Cuando la función useEffect tiene como segundo argumento un array con información, quiere decir que se 
   * ejecutará la primera vez del render y adicionalmente cada vez que se cambie el estado derivado que se 
   * pasó como parámetro en el array en este caso completedTodos
  */
  // React.useEffect(() => {
  //   console.log("Log 2");
  // }, [completedTodos])
  // console.log("Log 3");

  return (
    //no se le envian props
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
