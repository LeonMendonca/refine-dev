import React from "react";
import { Progress, Card, Flex } from "antd";

const PercentageCSS: React.CSSProperties = {
  background: "rgb(226, 212, 251)",
  width: "fit-content",
  height: "fit-content",
  color: "rgb(140, 77, 248)",
  fontSize: 12,
  fontWeight: "bolder",
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: 10,
  textAlign: "center",
};

const CompletedCSS: React.CSSProperties = {
  background: "rgb(212, 251, 214)",
  width: "fit-content",
  height: "fit-content",
  color: "rgb(71, 252, 68)",
  fontSize: "12px",
  fontWeight: "bolder",
  paddingLeft: "4px",
  paddingRight: "4px",
  borderRadius: "10px",
  textAlign: "center",
}

function ProgressComp() {
  return (
    <Card
      variant="outlined"
      title={"Top Projects"}
      style={{
        textAlign: "center",
        width: "60%",
        // color: "black",
        // background: "white",
      }}
    >
      <Flex vertical align="start" style={{marginBottom: 40}}>
        <Flex justify="space-between" style={{ width: "100%" }}>
          <h3>Wealthify</h3>
          <b style={PercentageCSS}>100%</b>
        </Flex>
        <Progress
          type="line"
          strokeColor={"blue"}
          success={{ percent: 100, strokeColor: "rgb(60, 2, 176)" }}
          percent={100}
        />
        <b style={CompletedCSS}>Completed</b>
      </Flex>
      <Flex vertical align="start">
        <Flex justify="space-between" style={{ width: "100%" }}>
          <h3>Rewardiam</h3>
          <b
            style={
              PercentageCSS
            }
          >
            100%
          </b>
        </Flex>
        <Progress
          type="line"
          success={{ percent: 100, strokeColor: "rgb(60, 2, 176)" }}
        />
        <b style={CompletedCSS}>Completed</b>
      </Flex>
    </Card>
  );
}

export default ProgressComp;
