import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BSexample from "./BSexample";
import Navbar from "./NavBar";
import LoadMarkdown from "./LoadMarkdown";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Navbar></Navbar>
      <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/programming.md"></LoadMarkdown>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
