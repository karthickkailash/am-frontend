import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const HeaderLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderLayout;
