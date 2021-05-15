import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { Activities } from "./Activities";

import React, { useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container py-3">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/products/:page">
            <ProductList />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/interview">
            <Interview />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/entry">
            <Entry />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <section className="row align-items-start gy-4">
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </section>
    </div>
  );
}

function Interview() {
  return <h2>Hahaha</h2>;
}
function Partners() {
  return <h2>Hahaha</h2>;
}
function Entry() {
  return <h2>Hahaha</h2>;
}

export default App;
