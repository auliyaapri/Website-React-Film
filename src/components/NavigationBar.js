import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">Santuy Movie</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link href="#superhero">Superhero</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
