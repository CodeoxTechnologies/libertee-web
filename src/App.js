
import React, { Component } from 'react';
import Home from './home/containers/Home';
import Learn from './learn/containers/Learn';
import { Navigation, Header } from './shared';
import './assets/styles/home.scss';
import './assets/styles/common.scss';
import './assets/styles/shared.scss';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <Navigation />
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route exact={true} path="/learn">
              <Learn />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;