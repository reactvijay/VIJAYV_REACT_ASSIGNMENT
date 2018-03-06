import React from "react";
import ReactDOM from "react-dom";
import DataTable from './DataTable';
import AddProduct from './AddProduct';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./style.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={DataTable} />
      <Route path="/productlist" component={DataTable} />
      <Route path="/productedit" component={AddProduct} />
      <Route path="/productadd" component={AddProduct} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);