import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import HomePages from "../pages/HomePages";
import PrivateRouter from "./PrivateRouter";
import ProtectedRouter from "./ProtectedRouter";
import NotFound from "../components/NotFound";
import UnauthorizedPages from "../pages/UnauthorizedPages";
import AddRecipe from "../components/AddRecipe";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route index element={<HomePages />} />
          <Route path="/add-recipes" element={<AddRecipe />} />
        </Route>
        <Route path="/" element={<ProtectedRouter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<UnauthorizedPages />} />
      </Routes>
    </>
  );
}

export default Routers;
