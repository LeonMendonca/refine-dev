import React from "react";
import { Flex } from "antd";
import { DownOutlined } from "@ant-design/icons";

function TitleComp() {
  return (
    <Flex>
      <Flex
        justify="space-between"
        style={{ width: "100%", margin: 30, marginBottom: 0, color: "black" }}
      >
        <Flex vertical>
          <h1 style={{ fontWeight: "bolder", marginBottom: 2 }}>Entrepreneur Management</h1>
          <b style={{ color: "gray" }}>Tanvir Chavan</b>
        </Flex>

        {/* Logo */}
        <Flex align="center">
          <img
            src="http://thakureducation.org/images/logo.png"
            alt="logo"
            style={{ width: "24px", height: "24px" }}
          />
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "blue",
              margin: "0 8px",
            }}
          />
          <span style={{ color: "blue", fontWeight: 600 }}>TIA</span>
          <DownOutlined style={{ color: "blue", fontSize: "12px" }} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TitleComp;
