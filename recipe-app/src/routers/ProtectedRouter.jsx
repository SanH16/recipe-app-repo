import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authServices } from "../configs/auth";

export default function ProtectedRouter() {
  if (!authServices.isAuthorized()) {
    return <Outlet />; // jika sudah login, hanya navigate home tidak bisa ke page Login lagi
  }
  return <Navigate to={"/"} />; // jika belum, navigate ke page login
}
