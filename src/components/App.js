import React, { Component } from 'react';
import logo from '../images/gtb_white.svg';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <h1 className="appTitle">Ford Test and Seed Records</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
