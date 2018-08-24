import React, { Component } from 'react';
import logo from './map-icon-train.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Moving London</h1>          
        </header>
        <p className="App-intro">
          Your number one location to get travel updates and get moving.
        </p>
      </div>
    );
  }
}

export default App;
