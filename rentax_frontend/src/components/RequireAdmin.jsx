// src/components/RequireAdmin.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authcontext";

const RequireAdmin = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // Jika belum login, redirect ke login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role !== "admin") {
    // Jika bukan admin, redirect ke dashboard user
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RequireAdmin;
