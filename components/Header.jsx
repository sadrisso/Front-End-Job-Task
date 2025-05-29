import React from "react";
import { PiHeartStraight } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-sm md:text-xl font-bold text-[#212337]">
            Fresh Harvests
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 text-xs">
            <a href="#home" className="hover:text-green-600">
              Home
            </a>
            <a href="#about" className="hover:text-green-600">
              About
            </a>
            <a href="#products" className="hover:text-green-600">
              Products
            </a>
            <a href="#contact" className="hover:text-green-600">
              Contact
            </a>
          </nav>
          <div className="flex justify-center items-center gap-4 text-black text-xs">
            <button className="flex justify-center items-center gap-2">
              <PiHeartStraight />
              <span>Favourites</span>
            </button>
            <button className="flex justify-center items-center gap-2">
              <FaCartShopping />
              <span>Cart</span>
            </button>
            <button className="border py-1 px-3 rounded-md font-bold">Sign In</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
