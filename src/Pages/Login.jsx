import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });

      const token = response.data.token;

      if (rememberMe) {
        localStorage.setItem("token", token); // persist login
      } else {
        sessionStorage.setItem("token", token); // session only
      }

      alert("Login Successful!");
      // Navigate to dashboard/home if needed

    } catch (error) {
      alert("Login Failed: " + error.response?.data?.message || "Try again");
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Enter your email for password reset:");
    if (!email) return;

    try {
      await axios.post("/api/forgot-password", { email });
      alert("Password reset instructions sent to your email.");
    } catch (error) {
      alert("Error: " + error.response?.data?.message || "Try again");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Logo */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <img src="/logo.png" alt="Elisha Logo" className="w-72" />
      </div>

      {/* Right Login Form */}
      <div className="w-1/2 bg-[#e6dbd1] flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-[300px] md:w-[350px] flex flex-col gap-5">
          <h2 className="text-center text-xl font-medium text-gray-700">USER LOGIN</h2>

          <div className="flex items-center bg-[#46433f] text-white rounded-full px-4 py-2">
            <FaUser className="mr-3 text-sm" />
            <input
              type="text"
              placeholder="USER NAME"
              className="bg-transparent outline-none text-sm w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center bg-[#46433f] text-white rounded-full px-4 py-2">
            <FaLock className="mr-3 text-sm" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="bg-transparent outline-none text-sm w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between text-xs text-gray-700 px-1">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-1"
              />
              REMEMBER
            </label>
            <span onClick={handleForgotPassword} className="cursor-pointer hover:underline">
              FORGOT PASSWORD ?
            </span>
          </div>

          <button
            type="submit"
            className="bg-[#46433f] text-white py-2 rounded-full hover:bg-black transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
