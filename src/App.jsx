// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Women from "./Pages/Women";
import Stiched from "./Pages/Stiched";
import Unstiched from "./Pages/Unstiched";
import Topsales from "./Pages/Topsales";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AdminDashboard from "./Pages/AdminDashboard";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Pages/CartContext";
import { useCart } from "./Pages/CartContext"; 



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/stitched" element={<Stiched />} />
        <Route path="/unstitched" element={<Unstiched />} />
        <Route path="/topsales" element={<Topsales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
