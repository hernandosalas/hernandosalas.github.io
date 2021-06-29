import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">HS-Bookmarks</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Entertainment</Nav.Link>
      <Nav.Link href="#link">Tools</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}

export default NavBar;
