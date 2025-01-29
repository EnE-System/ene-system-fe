import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import DashLayout from "../layouts/DashLayout";
import Welcome from "../pages/welcome";
import WelcomLayout from "../layouts/welcomLayout";
import Dashboard from "../pages/dashboard";
import NotFound from "../components/not-found";
import Demos from "../pages/demos";

const AppRoutes = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/welcome" element={<WelcomLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/welcome/demos" element={<Demos />} />

          {/* </Route> */}
        </Route>
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
