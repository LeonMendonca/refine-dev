import React, { useEffect } from "react";
import { Pie } from "@antv/g2plot";
import { Card } from "antd";

function PieCharComp() {
  const data = [
    { type: "Progress", value: 82 },
    { type: "Completed", value: 46 },
    { type: "On Hold", value: 10 },
  ];

  useEffect(() => {
    const piePlot = new Pie("container1", {
      data,
      angleField: "value",
      color: ["lightblue", "#1554ad" ,"#1668dc"],
      colorField: "type",
      radius: 0.9,
      innerRadius: 0.5,
      label: {
        offset: "50%",
        content: "{value}",
        style: {
          textAlign: "center",
          fontSize: 10,
        },
      },
      tooltip: {
        formatter: (dataum) => ({
          name: dataum.type,
          value: dataum.value,
        }),
      },
    });

    piePlot.render();

    return () => {
      piePlot.destroy();
    };
  }, []);

  return (
    <Card
      variant="outlined"
      title={"Startup & Status Breakdown"}
      style={{
        textAlign: "center",
        width: "fit-content",
        // background: "white",
      }}
    >
      <div id="container1" style={{ width: "fit-content", height: 200, display: "flex"  }} />
    </Card>
  );
}

export default PieCharComp;
