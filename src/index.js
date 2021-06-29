import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import BSexample from "./BSexample";
import Navbar from "./NavBar";
import LoadMarkdown from "./LoadMarkdown";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Navbar></Navbar>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/tools">
            <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/tools.md"></LoadMarkdown>
          </Route>
          <Route path="/entertainment">
            <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/entertainment.md"></LoadMarkdown>
          </Route>
          <Route path="/programming">
            <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/programming.md"></LoadMarkdown>
          </Route>
          <Route path="/travel">
            <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/travel.md"></LoadMarkdown>
          </Route>
          <Route path="/bookmarks">
            <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/bookmarks.md"></LoadMarkdown>
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
