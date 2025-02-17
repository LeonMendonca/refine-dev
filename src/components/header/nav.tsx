import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { NavLink, Outlet } from "react-router";


function NavComp() {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key: string) => {
    setActiveKey(key);
    console.log("Active tab:", key);
  };

  const baseTabStyle: React.CSSProperties = {
    marginRight: "10px",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    color: "#4E4E4E",
  };

  const activeTabStyle: React.CSSProperties = {
    backgroundColor: "#1677ff",
    color: "#fff",
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <NavLink
          to={"/"}
          style={
            activeKey === "1"
              ? { ...baseTabStyle, ...activeTabStyle }
              : baseTabStyle
          }
        >
          Dashboard
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to={"/st"}
          style={
            activeKey === "2"
              ? { ...baseTabStyle, ...activeTabStyle }
              : baseTabStyle
          }
        >
          Student & Project Management
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          to={"/mg"}
          style={
            activeKey === "3"
              ? { ...baseTabStyle, ...activeTabStyle }
              : baseTabStyle
          }
        >
          Mentorship Guidelines
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink
          to={"/fr"}
          style={
            activeKey === "4"
              ? { ...baseTabStyle, ...activeTabStyle }
              : baseTabStyle
          }
        >
          Funding & Resources
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <NavLink
          to={"/ec"}
          style={
            activeKey === "5"
              ? { ...baseTabStyle, ...activeTabStyle }
              : baseTabStyle
          }
        >
          Event & Competition
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <Tabs
        tabBarStyle={{
          margin: 30,
          marginTop: 0,
          width: "fit-content",
          padding: 10,
          borderRadius: 10,
          boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.30)"
        }}
        activeKey={activeKey}
        items={items}
        onChange={onChange}
      />
      <Outlet />
    </>
  );
}

export default NavComp;
