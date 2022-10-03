
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './home/containers/Home';
import Learn from './learn/containers/Learn';
import './assets/styles/home.scss'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
      </div>
    );
  }
}

export default App;