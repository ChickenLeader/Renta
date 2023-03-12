import Link from "next/link";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Container, Nav, Navbar as RNav } from "react-bootstrap";
import Image from "next/image";
import logo from "public/assets/RentaLogox2.png";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import { FontFamily } from "constants/FontFamily";
import { Modal } from "antd";
import { InputLabel, TextField } from "@mui/material";
import { NavbarModal } from "./NavbarModal";
import { useSelector } from "react-redux";

const Nav_Items = [
  { id: 1, name: "Latest seen", navigate: "/Latest" },
  { id: 2, name: "Contact us", navigate: "/ContactUs" },
  { id: 3, name: "About us", navigate: "/AboutUs" },
];

const Navbar = () => {
  const [selected, setselected] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expand, setexpand] = useState(false);
  const [language, setlanguage] = useState("en");
  const isSignedIn = useSelector((state) => state.auth.token);
  const stateRedux = useSelector((state) => state);
  const router = useRouter();
  const pathName = router.pathname;

  const handleActiveTab = () => {
    let activeNav = Nav_Items.find((item) => item.navigate.includes(pathName));
    if (activeNav) {
      setselected(activeNav.id);
    } else {
      setselected(null);
    }
  };

  const handleLanguage = () => {
    const savedLang = localStorage.getItem("lang");
    setlanguage(savedLang);
  };

  const languageChange = (lang) => {
    setlanguage(lang);
    // const lang = router.locale === "en" ? "ar" : "en";
    let dir;
    if (lang === "en") {
      dir = "ltr";
    } else {
      dir = "rtl";
    }
    router.push(router.asPath, router.asPath, { locale: lang });
    localStorage.setItem("lang", lang);

    document.body.setAttribute("dir", dir);
    if (document.getElementsByTagName("nav").length) {
      document.querySelector("nav").setAttribute("dir", dir);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    handleLanguage();
  }, []);

  useEffect(() => {
    handleActiveTab();
  }, [router.pathname]);

  return (
    <div
      className={
        pathName.includes("/Home")
          ? styles.customNavContainer
          : styles.navContainer
      }
      // style={{
      //   // position: pathName.includes("/Home") ? "absolute" : "static",
      //   border: pathName.includes("/Home") ? "none" : null,
      // }}
    >
      <Modal
        footer={null}
        closable={null}
        style={{
          top: "30%",
        }}
        width={650}
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{ height: 300 }}
        >
          <NavbarModal closeModal={() => handleCancel()} />
        </div>
      </Modal>
      <RNav collapseOnSelect expanded={expand} expand="lg" variant="light">
        <Container className={styles.subContainer}>
          <Link href="/Home">
            <div className={styles.NavImage}>
              <Image alt=" " src={logo} layout="fill" />
            </div>
          </Link>
          <RNav.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setexpand(!expand)}
          />
          <RNav.Collapse id="responsive-navbar-nav">
            <Nav className={`${language == "ar" ? "me" : "ms"}-auto`}>
              {Nav_Items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-column justify-content-center"
                  onClick={() => setexpand(false)}
                >
                  <Link
                    href={item.navigate}
                    // onClick={() => setselected(item.id)}
                  >
                    <div className={styles.navTextCon}>
                      <a className={styles.navText}>
                        <Text
                          fontFamily={
                            selected == item.id ? FontFamily.semiBold : null
                          }
                        >
                          {item.name}
                        </Text>
                      </a>
                    </div>
                  </Link>
                </div>
              ))}
              <Link href={isSignedIn ? "/Units" : "#"}>
                <div
                  className={styles.signIn}
                  onClick={() => {
                    setexpand(false);
                    !isSignedIn && showModal();
                  }}
                >
                  <Text color="white" style={{ textAlign: "center" }}>
                    {isSignedIn ? "My units" : "Sign in"}
                  </Text>
                </div>
              </Link>
              <div className="d-flex align-items-center ms-4 ps-1">
                <div onClick={() => languageChange("en")}>
                  <Text
                    style={{
                      cursor: "pointer",
                      color: language == "en" ? Colors.primary : "black",
                    }}
                  >
                    EN
                  </Text>
                </div>
                <Text className={"mx-1"}>|</Text>
                <div onClick={() => languageChange("ar")}>
                  <Text
                    style={{
                      cursor: "pointer",
                      color: language == "ar" ? Colors.primary : "black",
                    }}
                  >
                    AR
                  </Text>
                </div>
              </div>
              {/* <Nav.Link
                className={styles.navlangEn}
                href="#"
                onClick={showModal}
              >
                EN
              </Nav.Link>
              <Nav.Link className={styles.navlangAr} href="#">
                | AR
              </Nav.Link> */}
            </Nav>
          </RNav.Collapse>
        </Container>
      </RNav>
    </div>
  );
};

export default memo(Navbar);
