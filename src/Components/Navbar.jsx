import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import logos from "/logo.png";
import red from "/59.png";
import { useCart } from "../Pages/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useCart();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Women", path: "/women" },
    { name: "Stitched", path: "/stitched" },
    { name: "Unstitched", path: "/unstitched" },
    { name: "Top Sales", path: "/topsales" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-700 text-white text-xs text-center py-2">
        Avail free shipping National Worldwide for orders above PRK 3000!
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between px-4 md:px-12 py-4 relative">
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logos} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4 text-xl ml-auto">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border px-3 py-1 text-sm rounded-full pr-8"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  <FaSearch size={14} />
                </button>
              </div>
            )}
            <FaSearch
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer hover:text-black"
            />
            <Link to="/login">
              <FaUser className="cursor-pointer hover:text-black" />
            </Link>
            <Link to="/admin">
              <FaShoppingBag className="cursor-pointer hover:text-black" />
            </Link>
            <Link to="/cart" className="relative">
              <img
                src={red}
                alt="Cart"
                className="h-6 w-6 object-contain cursor-pointer"
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex justify-center gap-10 text-sm font-medium pb-3">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative pb-1 transition duration-200 ${
                    isActive
                      ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transition-all after:duration-300"
                      : "hover:text-gray-600"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col items-center gap-4 pb-6 md:hidden text-base font-semibold">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink to={path} onClick={() => setIsOpen(false)}>
                  {name}
                </NavLink>
              </li>
            ))}
            {/* Mobile Icons */}
            <div className="flex gap-4 items-center mt-2">
              {showSearch && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border px-3 py-1 text-sm rounded-full pr-8"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                  >
                    <FaSearch size={14} />
                  </button>
                </div>
              )}
              <FaSearch
                onClick={() => setShowSearch(!showSearch)}
                className="text-xl cursor-pointer"
              />
              <Link to="/login">
                <FaUser className="text-xl cursor-pointer" />
              </Link>
              <Link to="/admin">
                <FaShoppingBag className="text-xl cursor-pointer" />
              </Link>
              <Link to="/cart" className="relative">
                <img
                  src={red}
                  alt="Cart"
                  className="h-6 w-6 object-contain cursor-pointer"
                />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
