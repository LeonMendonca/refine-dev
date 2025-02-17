import React from "react";

import { Flex } from "antd";

import PieChartComp from "./plots/ring1";
import BarChartComp from "./plots/bar";
import RingCharComp from "./plots/ring2";
import ProgressComp from "./plots/progress";

import CardComponent from "./card";


type TCardCompProp = {
  cardContent: string;
  cardCount: number;
  textColor: `#${string}` | string;
  bgColor: `#${string}` | string;
};

const cardComponentProp: TCardCompProp[] = [
  {
    cardContent: "Registered Entrepreneurs",
    cardCount: 80,
    textColor: "orange",
    bgColor: "#ffeede",
  },
  {
    cardContent: "Active Projects",
    cardCount: 67,
    textColor: "blue",
    bgColor: "lightblue",
  },
  {
    cardContent: "Funding Approved",
    cardCount: 50,
    textColor: "green",
    bgColor: "#ccffbf",
  },
  {
    cardContent: "Mentorship Sessions",
    cardCount: 50,
    textColor: "#ff6d15",
    bgColor: "rgb(255 227 213)",
  },
];

function MainComp() {
  return (
    <>
      <Flex style={{margin: 30}} justify="space-between" gap={100}>
        {cardComponentProp.map((item) => {
          return (
            <CardComponent
              key={item.cardContent}    //resolve unique key error
              cardContent={item.cardContent}
              cardCount={item.cardCount}
              bgColor={item.bgColor}
              textColor={item.textColor}
            />
          );
        })}
      </Flex>
      <div style={{ margin: "20px" }}></div>
      <Flex style={{margin: 30}} justify="space-between">
        <PieChartComp />
        <BarChartComp />
      </Flex>
      <div style={{ margin: "20px" }}></div>
      <Flex style={{margin: 30}} justify="space-between">
        <ProgressComp />
        <RingCharComp />
      </Flex>
    </>
  );
}

export default MainComp;
