import React from "react";
import HeaderMain from "./components/HeaderMain";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Login from "./protectedRoute/Login";
import Register from "./protectedRoute/Register";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<HeaderMain />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
