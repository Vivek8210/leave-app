import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

import Home from "../Pages/Home";
import Leave from "../Pages/Leave";

const MainRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRouters;
