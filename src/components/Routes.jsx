import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../Assets/Productsdata";
import SignUp from "../pages/Signup";
import Productspage from "../pages/Products";
const Routesone = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Productspage />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routesone;
