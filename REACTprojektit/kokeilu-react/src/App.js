import React from 'react';
import logo from './kustomlogo.png';
import './App.css';


import dataa from './TestData.js'

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> KLIKKAA
        </p>
        <p>
          Hello {dataa.testi.nimi}
          Hieno {dataa.auto.malli}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ÄÄÄÄÄÄÄ
        </a>
      </header>
    </div>
  );
}

export default App;
