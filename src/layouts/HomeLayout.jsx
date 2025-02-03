import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className=" flex flex-col gap-3 min-h-screen  justify-center ">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
