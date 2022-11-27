import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar as RNav } from "react-bootstrap";
import Image from "next/image";
import logo from "public/assets/RentaLogox2.png";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import { FontFamily } from "constants/FontFamily";

const Nav_Items = [
  { id: 1, name: "Latest seen", navigate: "/Latest" },
  { id: 2, name: "Contact us", navigate: "/ContactUs" },
  { id: 3, name: "About us", navigate: "/AboutUs" },
];

export const Navbar = () => {
  const [selected, setselected] = useState("");
  const [signedin, setsignedin] = useState(false);
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
          <RNav.Brand href="/Home">
            <div className={styles.NavImage}>
              <Image src={logo} layout="fill" />
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
                      fontFamily={
                        selected == item.id ? FontFamily.semiBold : null
                      }
                    >
                      {item.name}
                    </Text>
                  </Nav.Link>
                </div>
              ))}
              <Nav.Link
                className={styles.signIn}
                href={"/Units"}
                onClick={() => setsignedin(!signedin)}
              >
                <Text color="white">{signedin ? "My units" : "Sign in"}</Text>
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
