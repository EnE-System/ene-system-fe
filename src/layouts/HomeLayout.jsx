import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="px-6 md:px-10 ">
      <div className="container mx-auto flex flex-col gap-3 min-h-screen justify-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
