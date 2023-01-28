import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
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

const Navbar = () => {
  const [selected, setselected] = useState("");
  const [signedin, setsignedin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setmodalStatus] = useState("signIn");
  const [expand, setexpand] = useState(false);
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    handleActiveTab();
  }, [router.pathname]);

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
              <InputLabel className={styles.label}>Email</InputLabel>
              <TextField
                sx={{ input: { color: "black" } }}
                style={{ width: "90%", color: "black" }}
              />
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
              <div className="mb-3">
                <InputLabel className={styles.label}>New password</InputLabel>
                <TextField
                  sx={{ input: { color: "black" } }}
                  style={{ width: "90%" }}
                />
              </div>
              <div>
                <InputLabel className={styles.label}>
                  Re-enter new password
                </InputLabel>
                <TextField
                  sx={{ input: { color: "black" } }}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div
              className={styles.sendVerification}
              onClick={() => {
                setmodalStatus("success");
                setsignedin(true);
                setTimeout(() => {
                  setIsModalOpen(false);
                }, 2000);
              }}
            >
              <Text color="white" fontFamily={FontFamily.semiBold}>
                Submit
              </Text>
            </div>
          </>
        ) : (
          <>
            <Image
              alt=" "
              src={require("public/assets/success.svg")}
              width={226}
              height={226}
            />
            <Text
              color="black"
              fontFamily={FontFamily.semiBold}
              className="mb-3"
            >
              Your password changed successfully
            </Text>
          </>
        )}
      </>
    );
  };

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
            <Nav className="ms-auto">
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
              <Link href={signedin ? "/Units" : "#"}>
                <div
                  className={styles.signIn}
                  onClick={() => {
                    !signedin && setIsModalOpen(true);
                  }}
                >
                  <Text color="white" style={{ textAlign: "center" }}>
                    {modalStatus == "success" ? "My units" : "Sign in"}
                  </Text>
                </div>
              </Link>
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

export default memo(Navbar);
