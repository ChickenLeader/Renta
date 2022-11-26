import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar as RNav } from "react-bootstrap";
import Image from "next/image";
import logo from "public/assets/RentaLogox2.png";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";

const Nav_Items = [
  { id: 1, name: "Latest seen", navigate: "/Latest" },
  { id: 2, name: "Contact us", navigate: "/ContactUs" },
  { id: 3, name: "About us", navigate: "/Latest" },
];

export const Navbar = () => {
  const [selected, setselected] = useState("");
  const router = useRouter();

  const handleActiveTab = () => {
    const pathName = router.pathname;
    let activeNav = Nav_Items.find((item) => item.navigate.includes(pathName));
    if (activeNav) {
      setselected(activeNav.id);
    } else {
      setselected(null);
    }
  };
  useEffect(() => {
    handleActiveTab();
  }, [router.pathname]);
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
                  <Nav.Link
                    className={styles.navText}
                    href={item.navigate}
                    // onClick={() => setselected(item.id)}
                  >
                    <Text
                      color={selected == item.id ? Colors.primary : "black"}
                    >
                      {item.name}
                    </Text>
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
