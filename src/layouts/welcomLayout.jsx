import React from "react";
import { Outlet } from "react-router-dom";
const WelcomLayout = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default WelcomLayout;
