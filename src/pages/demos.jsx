import React from "react";
import { Link } from "react-router-dom";
import { images } from "../common/index";
import { ChevronLeft } from "lucide-react";
import { Outlet } from "react-router-dom";
const DemoVideos = () => {


  const categories = [
    {
      title: "AUDIT",
      bgColor: "bg-blue-400",
      icon: images.audit,
      path: "/demos/audit",
    },
    {
      title: "ROI",
      bgColor: "bg-orange-400",
      icon: images.roi,
      path: "/demos/roi",
    },
    {
      title: "Recommendations",
      bgColor: "bg-white",
      icon: images.recommendations,
      path: "/demos/recommendations",
    },
    {
      title: "Reports",
      bgColor: "bg-green-400",
      icon: images.reports,
      path: "/demos/reports",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-10">
      {/* Header */}
      <header className="p-4 flex flex-col gap-6 border-b">
        <Link to="/demos" className="!w-fit">
          <img src={images.logo1} alt="EnE Systems" className="h-8" />
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Watch Demo Videos</h1>
          <Link
            to="/login"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Login Page
          </Link>
        </div>
      </header>

      <div className="flex gap-6 p-3">
        {/* Categories Sidebar */}
        <div className="w-64 flex flex-col gap-6">
          <h2 className="text-gray-500 mb-4">Categories</h2>
          {categories.map((category, index) => (
            <Link to={category.path} key={index}>
              <div
                style={{
                  backgroundImage: `url(${category?.icon})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className={`${category.bgColor}  h-[135px] rounded-lg p-4 cursor-pointer 
                  shadow-sm hover:shadow-md transition-shadow relative
                  hover:scale-105  duration-200`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                <div className="relative z-10 text-white">
                  <h3
                    className={`mt-2  font-semibold ${
                      category.title === "Recommendations"
                        ? "text-blue-600"
                        : "text-white"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Outlet for nested routes */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DemoVideos;
