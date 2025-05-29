'use client'
import React, { useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;

  return (
    <div>
      <div
        className="fixed inset-0 bg-opacity-50 flex items-center justify-center px-2 z-50 font-inter"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-lg px-4 py-6 sm:px-6 sm:py-8 w-full max-w-sm sm:max-w-md relative transform transition-all duration-300 ease-out scale-100 opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
            Login
          </h2>

          {/* Email Input */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-sm sm:text-base"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none pr-10 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot */}
          <div className="flex justify-between items-center mb-6 text-xs sm:text-sm">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>

          {/* Separator */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-xs sm:text-sm">Or Sign in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm sm:text-base font-medium hover:bg-gray-50">
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm sm:text-base font-medium hover:bg-gray-50">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5 mr-2" />
              Facebook
            </button>
          </div>

          {/* Sign up Link */}
          <p className="text-center text-gray-700 text-xs sm:text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
