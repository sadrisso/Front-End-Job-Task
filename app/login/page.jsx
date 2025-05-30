"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // 👇 You get form data here
    console.log("Login form submitted:", { email, password });

    // Place your Firebase login logic here if needed
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              className="absolute top-[38px] right-3 text-gray-500 text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        {/* Optional bottom text */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-orange-500 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
