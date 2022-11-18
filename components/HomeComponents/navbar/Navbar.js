import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

import {
  Button,
  Col,
  Container,
  Modal,
  Nav,
  Navbar as RNav,
  NavDropdown,
  Row,
} from "react-bootstrap";

export const Navbar = () => {
  const Registration = true;
  const Nav_Items = ["hamda", "zo2la", "Bola"];
  return (
    <RNav collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <RNav.Brand href="#home">React-Bootstrap</RNav.Brand>
        <RNav.Toggle aria-controls="responsive-navbar-nav" />
        <RNav.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {Nav_Items.map((item) => (
              <>
                <Nav.Link href="#deets">{item}</Nav.Link>
              </>
            ))}
          </Nav>
        </RNav.Collapse>
      </Container>
    </RNav>
  );
};
