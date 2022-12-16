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
import { Modal } from "antd";
import { InputLabel, TextField } from "@mui/material";

const Nav_Items = [
  { id: 1, name: "Latest seen", navigate: "/Latest" },
  { id: 2, name: "Contact us", navigate: "/ContactUs" },
  { id: 3, name: "About us", navigate: "/AboutUs" },
];

export const Navbar = () => {
  const [selected, setselected] = useState("");
  const [signedin, setsignedin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setmodalStatus] = useState("signIn");
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

  const HandleModalView = () => {
    return (
      <>
        {modalStatus == "signIn" ? (
          <>
            <Text
              fontSize={21}
              fontFamily={FontFamily.medium}
              color={Colors.secondary}
            >
              Type your email and send and change your password
            </Text>
            <div className="w-100 ms-5 ps-1">
              <InputLabel>Email</InputLabel>
              <TextField style={{ width: "90%" }} />
            </div>
            <div
              className={styles.sendVerification}
              onClick={() => setmodalStatus("forgotPassowrd")}
            >
              <Text color="white" fontFamily={FontFamily.semiBold}>
                send verification email
              </Text>
            </div>
          </>
        ) : modalStatus == "forgotPassowrd" ? (
          <>
            <div className="w-100 ms-5 ps-1">
              <InputLabel>New password</InputLabel>
              <TextField style={{ width: "90%" }} />
            </div>
            <div className="w-100 ms-5 ps-1">
              <InputLabel>Re-enter new password</InputLabel>
              <TextField style={{ width: "90%" }} />
            </div>
            <div
              className={styles.sendVerification}
              onClick={() => setmodalStatus("success")}
            >
              <Text color="white" fontFamily={FontFamily.semiBold}>
                Submit
              </Text>
            </div>
          </>
        ) : (
          <>
            <Image src={require("public/assets/success.svg")} />
            <Text color="black" fontFamily={FontFamily.semiBold}>
              Your password changed successfully
            </Text>
          </>
        )}
      </>
    );
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setmodalStatus("signIn");
  };

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
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{ height: 300 }}
        >
          <HandleModalView />
        </div>
      </Modal>
      <RNav collapseOnSelect expand="lg" variant="light">
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
              <Nav.Link
                className={styles.navlangEn}
                href="#"
                onClick={showModal}
              >
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
