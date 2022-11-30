import React, { Component, useEffect } from "react";
import Home from "./home/containers/Home";
import Learn from "./learn/containers/Learn";
import { Navigation, Header } from "./shared";
import { SnackbarProvider } from "notistack";
import "./assets/styles/home.scss";
import "./assets/styles/common.scss";
import "./assets/styles/shared.scss";
import "./assets/styles/profile.scss";
import "./assets/styles/products-list.scss";
import "./assets/styles/product-detail.scss";
import "./assets/styles/cartSidebar.scss";
import "./assets/styles/cart.scss";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./profile/containers/Profile";
import Products from "./Products/containers/Products";
import Product from "./Products/containers/Product";
import Cart from "./Payment/containers/Cart";
import { StateContext } from "./utils/StateContext";
  return (
    <SnackbarProvider autoHideDuration={3000}>
      <StateContext>
        <Router>
          <div className="app">
            <Header />
            <Navigation />
            <Switch>
              <Route exact={true} path="/">
                <Home />
              </Route>
              <Route exact={true} path="/learn">
                <Learn />
              </Route>
              <Route exact={true} path="/products">
                <Products />
              </Route>
              <Route exact={true} path="/product/:slug">
                <Product />
              </Route>
              <Route exact={true} path="/profile">
                <Profile />
              </Route>
              <Route exact={true} path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>
      </StateContext>
    </SnackbarProvider>
  );
};

export default App;
