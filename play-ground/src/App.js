import logo from './logo.svg';
import './App.css';

//El componente recibe propiedades o atributos
//Children recibe todas las propiedades del commponente sin especificarlas 
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.saludo} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          { props.children }

        </a>
      </header>
    </div>
  );
}

export default App;
