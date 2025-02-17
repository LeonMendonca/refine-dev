import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Card } from "antd";

const data = [
  {
    name: "Figma",
    2021: 65,
    2022: 42,
  },
  {
    name: "Sketch",
    2021: 18,
    2022: 100,
  },
  {
    name: "XD",
    2021: 35,
    2022: 37,
  },
  {
    name: "Photoshop",
    2021: 20,
    2022: 81,
  },
  {
    name: "Illustrator",
    2021: 40,
    2022: 17,
  },
  {
    name: "AfterEffect",
    2021: 11,
    2022: 18,
  },
  {
    name: "InDesign",
    2021: 45,
    2022: 77,
  },
  {
    name: "Maya",
    2021: 55,
    2022: 50,
  },
  {
    name: "Premiere",
    2021: 18,
    2022: 37,
  },
  {
    name: "Final Cut",
    2021: 58,
    2022: 95,
  },
  {
    name: "Figma",
    2021: 55,
    2022: 93,
  },
  {
    name: "Sketch",
    2021: 92,
    2022: 57,
  }
];

function BarChartComp() {
  return (
    <Card
      variant="outlined"
      title={"Funding Allocation"}
      style={{
        textAlign: "center",
        width: "fit-content",
      }}
    >
      <BarChart width={1000} height={250} data={data} style={{width: "100%"}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="2021" fill="rgba(111, 46, 233, 0.94)" />
        <Bar dataKey="2022" fill="rgb(159, 154, 251)" />
      </BarChart>
    </Card>
  );
}

export default BarChartComp;