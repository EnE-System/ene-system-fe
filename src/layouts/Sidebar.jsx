import React from "react";
import { BarChart2, PieChart, LogOut, Settings, List, X } from "lucide-react";
import logo from "../assets/logo-1.png";
import { Link } from "react-router-dom";

const Sidebar = ({ onLinkClick }) => {
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="text-gray-800 flex-col relative">
      <div className="sm:hidden flex justify-end">
        <button onClick={handleLinkClick} aria-label="Close Sidebar" className="p-2">
          <X size={24} className="text-gray-500" />
        </button>
      </div>
      <div className="brand-logo flex items-center justify-between my-7 border-b border-gray-300">
        <Link to="/admin" className="text-nowrap" onClick={handleLinkClick}>
          <img src={logo} className="w-32" alt="Logo" />
        </Link>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/admin"
              onClick={handleLinkClick}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <List className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={handleLinkClick}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <BarChart2 className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Data Entry</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={handleLinkClick}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <PieChart className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={handleLinkClick}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Settings className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-t border-gray-300 mt-1 pt-1">
        <button className="flex items-center gap-2 p-3 text-red-600 w-full" onClick={handleLinkClick}>
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
