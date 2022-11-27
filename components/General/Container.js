import React from "react";

const containerStyle = {
  width: "92%",
  margin: "auto",
  flexWrap: "wrap",
};

export default function Container({ children, style }) {
  return <div style={{ ...containerStyle, ...style }}>{children}</div>;
}
