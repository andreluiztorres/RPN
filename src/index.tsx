import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./styles/index.scss";

render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <Home />{console.log("oi")}
        </Route>
        <Route path="/login">
          <Login />{console.log("oi denovo")}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.body
);
