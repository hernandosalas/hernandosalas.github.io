import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import BSexample from "./BSexample";
import Navbar from "./NavBar";
import LoadMarkdown from "./LoadMarkdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Row>
        <Col md={2}>
          <Navbar></Navbar>
        </Col>
        <Col md={10}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route
                exact
                path="/tools"
                component={() => (
                  <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/tools.md"></LoadMarkdown>
                )}
              />
              <Route
                exact
                path="/entertainment"
                component={() => (
                  <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/entertainment.md"></LoadMarkdown>
                )}
              />
              <Route
                exact
                path="/programming"
                component={() => (
                  <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/programming.md"></LoadMarkdown>
                )}
              />
              <Route
                exact
                path="/travel"
                component={() => (
                  <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/travel.md"></LoadMarkdown>
                )}
              />
              <Route
                exact
                path="/bookmarks"
                component={() => (
                  <LoadMarkdown name="https://raw.githubusercontent.com/hernandosalas/Bookmarks/main/bookmarks.md"></LoadMarkdown>
                )}
              />
            </Switch>
          </Router>
        </Col>
      </Row>
    </div>

    {/* <div className="container"> */}
    {/* </div> */}
  </React.StrictMode>,
  document.getElementById("root")
);
