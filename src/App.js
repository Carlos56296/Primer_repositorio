import logo from './logo.svg';
import './App.css';
import { Kikincomponente } from './componente';
import TeachersTable from './componente/tabla';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Kikincomponente/>
        <div>
          <h1>Lista de Mestros</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
