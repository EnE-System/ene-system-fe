import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import UsersTable from "../pages/UsersTable";

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
          <Route path ="/users"  element={<UsersTable/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
