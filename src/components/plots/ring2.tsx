import React, { useEffect } from "react";
import { Pie } from "@antv/g2plot";
import { Card } from "antd";

function RingCharComp() {
  const data = [
    { type: "Project", value: 80 },
    { type: "Mentors", value: 41 },
  ];

  useEffect(() => {
    const piePlot = new Pie("container", {
      data,
      angleField: "value",
      color: ["orange", "#e5b55d"],
      colorField: "type",
      radius: 1,
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
      title={"Mentor Engagement"}
      style={{
        textAlign: "center",
        width: "fit-content",
        color: "black",
        // background: "white",
      }}
    >
      <div id="container" style={{ width: "fit-content", height: 200 }} />
    </Card>
  );
}

export default RingCharComp;
