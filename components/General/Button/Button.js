import React from "react";
import { Button as Btn } from "antd";
import styles from "./button.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function Button({
  isLoading,
  text,
  handlePress,
  btnStyle,
  className = "",
}) {
  return isLoading ? (
    <div className={[styles.button]}>
      <CircularProgress
        style={{
          color: "white",
          width: 30,
          height: 30,
        }}
      />
    </div>
  ) : (
    <Btn
      type="primary"
      htmlType="submit"
      onClick={handlePress}
      className={styles.button + " " + className}
      style={{
        ...btnStyle,
      }}
    >
      {text}
    </Btn>
  );
}
