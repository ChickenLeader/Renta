import React from "react";
import { Button, message, Space } from "antd";

 const handleError = (err) => {
  //   const [messageApi, contextHolder] = message.useMessage();
  return message.useMessage().open({
    type: "error",
    content: err,
  });
};

export default handleError