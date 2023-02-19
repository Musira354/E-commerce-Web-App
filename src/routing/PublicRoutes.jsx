import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginModal from "../components/login/LoginModal";
import HomePage from "../pages/HomePage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginModal />} />
    </Routes>
  );
};

export default PublicRoutes;
