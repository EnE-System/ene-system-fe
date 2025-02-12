import React from "react";
import { BarChart2, PieChart, LogOut, Settings, List, X } from "lucide-react";
import logo from "../assets/logo-1.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, toggleSidebar, closeSidebar }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path) ? "bg-orange-500 text-white" : "text-gray-900";
  return (
    <aside
      id="separator-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="sm:hidden flex justify-end">
          <button onClick={closeSidebar} aria-label="Close Sidebar" className="p-2">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="brand-logo flex items-center justify-between my-7 border-b border-gray-300">
          <Link to="/admin" className="text-nowrap" onClick={closeSidebar}>
            <img src={logo} className="w-32" alt="Logo" />
          </Link>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin"
                onClick={closeSidebar}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive('/admin')}`}
              >
                <List className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={closeSidebar}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive('/admin/data-entry')}`}
              >
                <BarChart2 className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Data Entry</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={closeSidebar}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive('/admin/analytics')}`}
              >
                <PieChart className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={closeSidebar}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive('/admin/settings')}`}
              >
                <Settings className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="border-t border-gray-300 mt-1 pt-1">
          <button className="flex items-center gap-2 p-3 text-red-600 w-full" onClick={closeSidebar}>
            <LogOut size={18} /> Log Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
