import dynamic from "next/dynamic";
import React from "react";
const HeaderOne = dynamic(() => import("./HeaderOne"));

const Header = () => {
  return <HeaderOne />;
};

export default Header;
