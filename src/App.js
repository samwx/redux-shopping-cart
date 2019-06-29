import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ProductsList } from "./views/Products";
import { Product } from "./views/Product";
import { Store } from "./store";
import Cart from "./views/Cart";

function App() {
  return (
    <Provider store={Store}>
      <div id="main-app">
        <h1>Amazing store</h1>
        <BrowserRouter>
          <Route exact path="/" component={ProductsList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
