import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">My Porfolio</Navbar.Brand>
        <div className="d-flex justify-content-end">
          {" "}
          {/* Wrap Nav component */}
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Experience</Nav.Link>
            <Nav.Link href="#">Certifs</Nav.Link>
            <Nav.Link href="#">Leadership</Nav.Link>
            <Nav.Link href="#">Contact Me</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
