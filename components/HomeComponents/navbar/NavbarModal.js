import React, { useEffect, useState } from "react";
import { Button, InputLabel, TextField } from "@mui/material";
import Text from "components/General/Text";
import { FontFamily } from "constants/FontFamily";
import styles from "./navbar.module.css";
import { Colors } from "constants/Colors";
import Image from "next/image";
import { Services } from "apis/Services/Services";
import HandleErrors from "hooks/handleErrors";
import { loginHandler } from "hooks/loginHandler";

export const NavbarModal = ({ closeModal, setsignedin }) => {
  const [modalStatus, setmodalStatus] = useState("signIn");
  const [loader, setloader] = useState(false);
  const [authValues, setauthValues] = useState({
    email: "",
    password: "",
    otp: "",
    newPasword: "",
  });

  const login = () => {
    setloader(true);
    let Valu = { email: authValues.email, password: authValues.password };
    Services.login(Valu)
      .then((res) => {
        console.log(res);
        // setsignedin(true);
        // loginHandler(res.token);
        setTimeout(() => {
          closeModal();
          // clearForm();
        }, 1000);
      })
      .catch((err) => {
        console.log(err.detail, "errrrr");
        // if (err.detail) {
        //     HandleErrors(err.detail)
        // } else {
        //   err?.details?.[0] && HandleErrors(err.details[0]);
        // }
      })
      .finally(() => setloader(false));
  };

  const clearForm = () => {
    setmodalStatus("signIn");
    setauthValues({
      email: "",
      password: "",
      otp: "",
      newPasword: "",
    });
  };

  return (
    <>
      {modalStatus == "signIn" ? (
        <>
          <div className="w-100 ms-5 ps-1">
            <div className="mb-3">
              <InputLabel className={styles.label}>Email</InputLabel>
              <TextField
                key={"emailLogin"}
                sx={{ input: { color: "black" } }}
                style={{ width: "90%" }}
                type="email"
                className="form-contol"
                value={authValues.email}
                onChange={(e) => {
                  //   console.log(e.target.value);
                  setauthValues({ ...authValues, email: e.target.value });
                }}
              />
            </div>
            <div>
              <InputLabel className={styles.label}>Password</InputLabel>
              <TextField
                sx={{ input: { color: "black" } }}
                style={{ width: "90%" }}
                type="password"
                // onChange={(e) => setpassword(e.target.value)}
                // value={password}
              />
            </div>
          </div>
          <div
            className="align-self-end me-5"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setmodalStatus("forgotPassowrd");
            }}
          >
            <Text className={"text-right"}>Forgot password?</Text>
          </div>
          <Button
            variant="contained"
            className={styles.sendVerification}
            onClick={login}
          >
            <Text color="white" fontFamily={FontFamily.semiBold}>
              Login
            </Text>
          </Button>
        </>
      ) : modalStatus == "forgotPassowrd" ? (
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
              type={"email"}
              sx={{ input: { color: "black" } }}
              style={{ width: "90%", color: "black" }}
              // value={email}
            />
          </div>
          <Button
            variant="contained"
            className={styles.sendVerification}
            onClick={() => setmodalStatus("otp")}
          >
            <Text color="white" fontFamily={FontFamily.semiBold}>
              send verification email
            </Text>
          </Button>
        </>
      ) : modalStatus == "otp" ? (
        <>
          <Text
            fontSize={21}
            fontFamily={FontFamily.medium}
            color={Colors.secondary}
          >
            please enter the code we sent you to lza kza
          </Text>
          <div className="w-100 ms-5 ps-1">
            <InputLabel className={styles.label}>OTP</InputLabel>
            <TextField
              type={"number"}
              sx={{ input: { color: "black" } }}
              style={{ width: "90%", color: "black" }}
            />
          </div>

          <Button
            variant="contained"
            className={styles.sendVerification}
            onClick={() => setmodalStatus("newPassword")}
          >
            <Text color="white" fontFamily={FontFamily.semiBold}>
              Verify
            </Text>
          </Button>
        </>
      ) : modalStatus == "newPassword" ? (
        <>
          <div className="w-100 ms-5 ps-1">
            <div className="mb-3">
              <InputLabel className={styles.label}>New password</InputLabel>
              <TextField
                sx={{ input: { color: "black" } }}
                style={{ width: "90%" }}
                type="password"
              />
            </div>
            <div>
              <InputLabel className={styles.label}>
                Re-enter new password
              </InputLabel>
              <TextField
                sx={{ input: { color: "black" } }}
                style={{ width: "90%" }}
                type="password"
              />
            </div>
          </div>
          <Button
            className={styles.sendVerification}
            onClick={() => {
              setmodalStatus("success");
              // setsignedin(true);
              setTimeout(() => {
                setmodalStatus("signIn");
              }, 3000);
            }}
          >
            <Text color="white" fontFamily={FontFamily.semiBold}>
              Submit
            </Text>
          </Button>
        </>
      ) : modalStatus == "success" ? (
        <>
          <Image
            alt=" "
            src={require("public/assets/success.svg")}
            width={226}
            height={226}
          />
          <Text color="black" fontFamily={FontFamily.semiBold} className="mb-3">
            Your password changed successfully
          </Text>
        </>
      ) : null}
    </>
  );
};
