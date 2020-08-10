import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          ULTRAVIZION ENGINEERS PVT. LTD.
        </h2>
        <p style={{marginTop: 0}}>
          <i>Manufacturer of Electrical Control Panels, Consultancy and Job works</i>
        </p>
        <a
          className="App-link"
          href="/Ultravizion-Company-Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Company Profile
        </a>
        <div style={{width: '100%', height: '16px', position: 'absolute', bottom: '32px', backgroundColor: '#50B354'}}></div>
        <div style={{width: '100%', height: '32px', position: 'absolute', bottom: '0px', backgroundColor: '#33397C'}}></div>
      </header>
    </div>
  );
}

export default App;
