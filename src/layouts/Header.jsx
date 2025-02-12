import React, { useState } from "react";

const Header = ({ toggleSidebar, title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const signOut_ = () => {
    localStorage.removeItem("user");
    // dispatch(signout()); // You can add the redux signout dispatch here if needed
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="grid grid-cols-2 items-center p-4">
      {/* Sidebar toggle button for small screens */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="sm:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
        aria-controls="separator-sidebar"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 01.75z"
          ></path>
        </svg>
      </button>

      {/* Custom title for larger screens */}
      <div className="hidden sm:block">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      </div>

      {/* User Profile Dropdown */}
      <div className="relative justify-self-end">
        <button
          onClick={toggleDropdown} // Toggle dropdown on button click
          className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <img
            src="/assets/images/profile/user-1.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </button>
        {isDropdownOpen && ( // Conditionally render the dropdown based on state
          <div
            id="user-dropdown"
            className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/images/profile/user-1.jpg"
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h5 className="font-semibold text-lg">Sayon Coulibaly</h5>
                  <span className="text-gray-500">Sayon Coulibaly</span>
                  <p className="text-sm text-gray-600">
                    <i className="ti ti-mail"></i> sayoncoul.sc@gmail.com
                  </p>
                </div>
              </div>
              <div className="py-4">
                <a
                  href="javascript:void(0)"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={signOut_}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
