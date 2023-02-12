import React from "react";
import { Button, message, Space } from "antd";

export const handleSuccess = (text) => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };
};
