import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import Welcome from "../pages/welcome";
import NotFound from "../components/not-found";
import DemoVideos from "../pages/demos";
import VideoContent from "../components/VideoContent";
import CompletedAudits from "../pages/admin/CompletedAudit";

const AppRoutes = () => {
  return (
    <Router>
      {/* Toast Notifications */}
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

      {/* Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />

        </Route>

        {/* Admin Routes */}
        {/* <Route
          path="/admin"
          element={
            <AdminLayout>
              <DashboardPage />

            </AdminLayout>
          }
        >
          <Route
            path="/admin/completed-audits"
            element={
              <CompletedAudits />
            }
          />
        </Route> */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} /> {/* This will render by default when you access /admin */}
          <Route path="completed-audits" element={<CompletedAudits />} />
        </Route>
        <Route path="/demos" element={<DemoVideos />}>
          <Route
            index
            element={
              <VideoContent
                title="How to Conduct an Energy Audit"
                description="Start by gathering basic building information"
              />
            }
          />
          <Route
            path="audit"
            element={
              <VideoContent
                title="How to Conduct an Energy Audit"
                description="Start by gathering basic building information"
              />
            }
          />
          <Route
            path="roi"
            element={
              <VideoContent
                title="ROI Analysis"
                description="Learn how to calculate return on investment"
              />
            }
          />
          <Route
            path="recommendations"
            element={
              <VideoContent
                title="Creating Recommendations"
                description="Best practices for making recommendations"
              />
            }
          />
          <Route
            path="reports"
            element={
              <VideoContent
                title="Generating Reports"
                description="How to generate comprehensive reports"
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
