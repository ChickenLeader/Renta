import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { Container, Nav, Navbar as RNav } from "react-bootstrap";
import Image from "next/image";
import logo from "public/assets/RentaLogox2.png";
export const Navbar = () => {
  const Registration = true;
  const Nav_Items = [
    "Latest seen",
    "Contact us",
    "About us",
    // "Sign in",
    // "EN | AR",
  ];
  return (
    <div className={styles.navContainer}>
      <RNav collapseOnSelect expand="lg" bg="white" variant="light">
        <Container className={styles.subContainer}>
          <RNav.Brand href="#home">
            <div className={styles.NavImage}>
              <Image src={logo} />
            </div>
          </RNav.Brand>
          <RNav.Toggle aria-controls="responsive-navbar-nav" />
          <RNav.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {Nav_Items.map((item, index) => (
                <div key={index}>
                  <Nav.Link className={styles.navText} href="#">
                    {item}
                  </Nav.Link>
                </div>
              ))}
              <Nav.Link className={styles.signIn} href="#">
                Sign in
              </Nav.Link>
              <Nav.Link className={styles.navlangEn} href="#">
                EN
              </Nav.Link>
              <Nav.Link className={styles.navlangAr} href="#">
                | AR
              </Nav.Link>
            </Nav>
          </RNav.Collapse>
        </Container>
      </RNav>
    </div>
  );
};
