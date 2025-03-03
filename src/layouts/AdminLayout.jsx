import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/completed-audits": "Completed Audits",
    "audit/new": "New Audit",
    "/admin/audit/checklist": "Audit CheckList",
    // Add other routes and their titles here
  };

  const currentTitle = pageTitles[location.pathname] || "Admin Panel";
  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />
      <div className="p-4 sm:ml-64">
        <Header toggleSidebar={toggleSidebar} title={currentTitle} />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 p-6">
            {/* Render nested route components here */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
