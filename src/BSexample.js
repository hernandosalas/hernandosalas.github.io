import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function BSexample() {
  return (
    <div className="center">
      <Container>
        <Row>
          <Col>
            CODE AND PACKAGES
            <Row>11</Row>
            <Row>11</Row>
            <Row>
              <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
            </Row>
          </Col>
          <Col>TOOLS 2</Col>
          <Col>MISC</Col>
          <Col>APPS</Col>
        </Row>
      </Container>
    </div>
  );
}

export default BSexample;
