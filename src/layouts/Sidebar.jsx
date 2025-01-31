import React from "react";
import { BarChart2, PieChart, LogOut, Settings, List } from "lucide-react";
import logo from "../assets/logo-1.png";

const Sidebar = () => {
  return (
    <aside className="text-gray-800 flex flex-col p-4">
        <div className="brand-logo d-flex align-items-center justify-content-between my-7 border-b border-gray-300">
            <a href="javascript:void(0)" className="text-nowrap logo-img">
              <img src={logo} className="w-32" alt="Logo"/>
            </a>
        </div>
        <nav className="flex-1 mt-4">
            <ul>
              <li className="mb-2">
                <a href="/admin" className="flex items-center gap-2 p-2 rounded-lg bg-orange-500 text-white">
                  <List /> Dashboard
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-orange-200">
                  <BarChart2 /> Data Entry
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-orange-200">
                  <PieChart /> Analytics
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-orange-200">
                  <Settings /> Settings
                </a>
              </li>
            </ul>
        </nav>
        <div className="border-t border-gray-300 mt-1 pt-1">
            <button className="flex items-center gap-2 p-3 text-red-600 w-full">
              <LogOut size={18} /> Log Out
            </button>
        </div>
    </aside>
  );
};

export default Sidebar;
