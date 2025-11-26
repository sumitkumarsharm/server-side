import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Register />} />
      <Route path="/verify-email/:token" element={<Register />} />
      <Route path="/forgot-password" element={<Register />} />
      <Route path="/reset-password/:token" element={<Register />} />
    </Routes>
  );
};

export default App;
