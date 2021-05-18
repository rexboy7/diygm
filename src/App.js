import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { Activities } from "./Activities";
import { Partners } from "./Partners";

import React, { useCallback } from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

export function App() {
  return (
    <div className="container py-3">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/products/:page" component={ProductListWrapper} />
          <Route path="/products" component={ProductListWrapper} />
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
function Entry() {
  return <h2>Hahaha</h2>;
}

function ProductListWrapper(props) {
  const params = useParams();
  const page = parseInt(params.page, 10) || 1;
  return <ProductList page={page} />;
}
export default App;
