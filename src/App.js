import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Nuevo Ejercicio</h1>

        <p>
          Modificar <code>src/App.js</code> y guarda tu archivo y no necesitasr recargar la pagina.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React y Utiliza la Documentación Oficial
        </a>
      </header>
    </div>
  );
}

export default App;
