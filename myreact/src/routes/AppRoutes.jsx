import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Login from "../pages/auth/Login";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import ManagerDashboard from "../pages/manager/ManagerDashboard";

const AppRoutes = () => {
  const { userRole } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/customer"
        element={
          userRole === "customer" ? (
            <CustomerDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/manager"
        element={
          userRole === "manager" ? (
            <ManagerDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;