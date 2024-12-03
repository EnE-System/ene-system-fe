import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className=" bg-color-bg px-6 md:px-28 ">
      <div className="container mx-auto flex flex-col gap-3 min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
