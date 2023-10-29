import React from "react";
import { Outlet } from "react-router-dom";
import UnauthorizedPages from "../pages/UnauthorizedPages";
import Layout from "../layouts/Layout";
import { authServices } from "../configs/auth";

export default function PrivateRouter() {
  if (authServices.isAuthorized()) {
    return (
      <Layout>
        <Outlet />; // jika sudah login, navigate home
      </Layout>
    );
  }

  return <UnauthorizedPages />; //jika belum, navigate ke page unauthorized
  // return <Navigate to={path} />;
}
