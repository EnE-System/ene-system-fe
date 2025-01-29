import React, { useState } from "react";
import { Video } from "lucide-react";
import { images } from "../common";
import FormField from "../components/FormField";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        className="bg-primary relative p-8 flex flex-col justify-center items-center bg-blend-overlay bg-opacity-90"
        style={{
          backgroundImage: `url(${images.shapes})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={images.logo1} alt="" /> */}
        <div className="flex items-start w-full">
          {/* Placeholder for logo */}
          <div className="flex absolute top-10 items-start w-full">
            <img className="" src={images.logo} alt="Login background" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-3xl font-bold text-white text-center">
            Hello there!
          </h1>
          <p className="text-center text-white">
            It's good to have you back. To stay connected, please login with
            your details or create account to get started
          </p>

          <div className="py-2 px-4 border-2 text-white border-white flex items-center gap-4 rounded-full text-sm hover:bg-white/10 cursor-pointer transition-colors">
            <span>Watch Demo Videos</span>
            <Video className="text-white" size={20} />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <ul className="flex gap-4 border-b">
            <li
              onClick={() => setActiveTab("register")}
              className={`pb-2 px-4 cursor-pointer ${
                activeTab === "register" ? "border-b-2 border-primary" : ""
              }`}
            >
              Register
            </li>
            <li
              onClick={() => setActiveTab("login")}
              className={`pb-2 px-4 cursor-pointer ${
                activeTab === "login" ? "border-b-2 border-primary" : ""
              }`}
            >
              Login
            </li>
          </ul>
        </div>
        <form className="mt-8">
          {activeTab === "register" ? (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div>
                  <FormField
                    type="input"
                    icon={<FaUserAlt />}
                    placeholder="First Name"
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <FormField
                    type="input"
                    icon={<FaUserAlt />}
                    placeholder="Last Name"
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <FormField
                  type="input"
                  icon={<IoLocation />}
                  placeholder="Company"
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <FormField
                  type="input"
                  icon={<MdOutlineMail />}
                  placeholder="Email"
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <FormField
                  type="input"
                  icon={<IoIosCall />}
                  placeholder="Contact"
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <FormField
                  type="input"
                  placeholder="Password"
                  icon={<RiLockPasswordFill />}
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <FormField
                  type="input"
                  placeholder="Confirm Password"
                  icon={<RiLockPasswordFill />}
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white p-2 flex justify-center items-center gap-3 rounded-full hover:bg-primary transition-colors"
              >
                <span>Create Account</span>

                <p>
                  <FaArrowRightLong />
                </p>
              </button>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-slate-500 text-sm">Or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <button
                type="submit"
                className="border-primary border-2 text-primary p-2 flex justify-center items-center gap-3 rounded-full  transition-colors"
              >
                <p>
                  <FaGooglePlusG />
                </p>
                <span>Continue with Google</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <FormField
                  type="input"
                  placeholder="Email"
                  icon={<MdOutlineMail />}
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <FormField
                  type="input"
                  placeholder="Password"
                  icon={<RiLockPasswordFill />}
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white p-2 flex justify-center items-center gap-3 rounded-full hover:bg-primary transition-colors"
              >
                <Link to="/dashboard">Login</Link>

                <p>
                  <FaArrowRightLong />
                </p>
              </button>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-slate-500 text-sm">Or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <button
                type="submit"
                className="border-primary border-2 text-primary p-2 flex justify-center items-center gap-3 rounded-full  transition-colors"
              >
                <p>
                  <FaGooglePlusG />
                </p>
                <span>Continue with Google</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
