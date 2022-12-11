import React from "react";
import Map from "../components/Map";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<Register />} />
      <Route path="map" element={<Map />} />
      <Route path="products" element={<Products />} />
    </Routes>
  );
};

export default AllRoutes;
