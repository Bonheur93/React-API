import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MonApi from './Components/MonApi';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MonApi />
      </div>
    );
  }
}

export default App;
