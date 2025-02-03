import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className=" flex">
      <Sidebar />
      <div className=" flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
