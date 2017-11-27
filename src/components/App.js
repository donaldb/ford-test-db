import React, { Component } from 'react';
import logo from '../images/gtb_white.svg';
import '../css/App.css';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ford Test and Seed Records</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
