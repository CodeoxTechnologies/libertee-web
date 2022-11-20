import React, { Component } from "react";
import Home from "./home/containers/Home";
import Learn from "./learn/containers/Learn";
import { Navigation, Header } from "./shared";
import "./assets/styles/home.scss";
import "./assets/styles/common.scss";
import "./assets/styles/shared.scss";
import "./assets/styles/profile.scss";
import "./assets/styles/products-list.scss";
import "./assets/styles/product-detail.scss";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./profile/containers/Profile";
import Products from "./Products/containers/Products";
import Product from "./Products/containers/Product";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Navigation />
          <Switch>
            <Route exact={true} path="/libertee-web">
              <Home />
            </Route>
            <Route exact={true} path="/learn">
              <Learn />
            </Route>
            <Route exact={true} path="/libertee-web/products">
              <Products />
            </Route>
            <Route exact={true} path="/libertee-web/product/:name">
              <Product />
            </Route>
            <Route exact={true} path="/libertee-web/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
