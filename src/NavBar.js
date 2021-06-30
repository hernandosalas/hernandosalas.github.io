// import React, { useState } from "react";

// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

// function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/">HS-Bookmarks</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="/tools">Tools</Nav.Link>
//           <Nav.Link href="/entertainment">Entertainment</Nav.Link>
//           <Nav.Link href="/programming">Programming</Nav.Link>
//           <Nav.Link href="/travel">Travel</Nav.Link>
//           <Nav.Link href="/bookmarks">Bookmarks</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavBar;

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
            <Nav.Link href="/tools">Tools</Nav.Link>
          </MenuItem>
          <MenuItem>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
          </MenuItem>
          <MenuItem>
            <Nav.Link href="/programming">Programming</Nav.Link>
          </MenuItem>
          <MenuItem>
            <Nav.Link href="/travel">Travel</Nav.Link>
          </MenuItem>
          <MenuItem>
            <Nav.Link href="/bookmarks">Bookmarks</Nav.Link>
          </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default NavBar;
