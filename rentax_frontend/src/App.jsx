import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";

import Landing from "./pages/Landing";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import BookingForm from "./pages/BookingForm";
import BookingList from "./pages/BookingList";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/Profile";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCars from "./pages/admin/AdminCars";

import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public routes */}
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
        <Route path="/booking" element={<BookingForm />} />

        {/* Protected user dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        {/* Protected profile page */}
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        {/* Protected booking list */}
        <Route
          path="/my-bookings"
          element={
            <RequireAuth>
              <BookingList />
            </RequireAuth>
          }
        />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminDashboard />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/cars"
          element={
            <RequireAdmin>
              <AdminCars />
            </RequireAdmin>
          }
        />
        {/* Tambah route admin lain di sini */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
