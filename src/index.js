import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import BSexample from "./BSexample";
import Navbar from "./NavBar";
import LoadMarkdown from "./LoadMarkdown";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <Navbar></Navbar>
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
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
