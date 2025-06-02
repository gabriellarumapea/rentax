import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import RequireRole from "./components/RequireRole";

import Landing from "./pages/Landing";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import BookingForm from "./pages/BookingForm";
import BookingList from "./pages/BookingList";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddCar from "./pages/admin/AddCar";
import EditCar from "./pages/admin/EditCar";
// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCars from "./pages/admin/AdminCars";
import AdminBookings from "./pages/admin/AdminBookings";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-1 min-h-[80vh] bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Testimonial />
                <FAQ />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<DetailCar />} />

          {/* User Only */}
          <Route
            path="/booking"
            element={
              <RequireRole role="user">
                <BookingForm />
              </RequireRole>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireRole role="user">
                <Dashboard />
              </RequireRole>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <RequireRole role="user">
                <BookingList />
              </RequireRole>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireRole role="user">
                <Profile />
              </RequireRole>
            }
          />

          {/* Admin Only */}
          <Route
            path="/admin"
            element={
              <RequireRole role="admin">
                <AdminDashboard />
              </RequireRole>
            }
          />
          <Route
            path="/admin/cars"
            element={
              <RequireRole role="admin">
                <AdminCars />
              </RequireRole>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <RequireRole role="admin">
                <AdminBookings />
              </RequireRole>
            }
          />
          <Route
            path="/admin/add-car"
            element={
              <RequireRole role="admin">
                <AddCar />
              </RequireRole>
            }
          />
          <Route
            path="/admin/edit-car/:id"
            element={
              <RequireRole role="admin">
                <EditCar />
              </RequireRole>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
