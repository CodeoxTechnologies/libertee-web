
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from './home/containers/Home';
import Learn from './learn/containers/Learn';
import { Navigation, Header } from './shared';
import './assets/styles/home.scss';
import './assets/styles/common.scss';
import './assets/styles/shared.scss';
import './assets/styles/profile.scss';
import './assets/styles/products-list.scss';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './profile/containers/Profile';
import Products from './Products/containers/Products';
class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <Navigation />
          <Switch>
            <Route exact={true} path="/libertee-web">
              <Home />
            </Route>
            <Route exact={true} path="/learn">
              <Learn />
            </Route>
            <Route exact={true} path="/products">
              <Products />
            </Route>
            <Route exact={true} path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;