import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
