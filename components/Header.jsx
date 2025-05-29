"use client";
import React, { useState } from "react";
import { PiHeartStraight } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Title from "./Title";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm bg-[url('https://i.ibb.co/HT5dTxTT/Adobe-Stock-335745675-Preview.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center sticky top-0 z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/vzY3nQZ/logo.png"
            alt="Logo"
            className="w-6 h-6 md:w-7 md:h-7"
          />
          <span className="text-lg md:text-xl font-bold text-black">
            Fresh Harvests
          </span>
        </div>

        {/* Nav links - only for desktop */}
        <nav className="hidden md:flex gap-6 text-black text-sm">
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

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-4 text-xs text-black">
            <button className="flex items-center gap-2">
              <PiHeartStraight />
              <span>Favourites</span>
            </button>
            <button className="flex items-center gap-2 relative">
              <FaCartShopping />
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <button className="border py-1 px-3 rounded-md font-bold">
              Sign In
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-4 bg-[#84A178] px-3 py-2 rounded-md">
            <div className="relative">
              <FaCartShopping className="text-white text-lg" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoMdClose className="text-white text-2xl" />
              ) : (
                <RxHamburgerMenu className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 md:h-[600px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <Title title="Welcome to fresh harvest" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#212337] mb-6">
              Fresh Fruits and Vegetables
            </h1>
            <p className="text-xs md:w-2/3 text-[#4A4A52] mb-8">
              At Fresh Harvest we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables
            </p>
            <button className="px-6 py-3 bg-[#FF6A19] text-white rounded-xl font-semibold text-sm transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f7f7f7] px-6 py-4 shadow-lg z-40 transform transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={toggleMenu}>
            <IoMdClose className="text-2xl text-black" />
          </button>
        </div>
        <div className="space-y-4 text-sm font-medium text-gray-700 flex flex-col">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#products" onClick={toggleMenu}>
            Products
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
          <hr />
          <a
            href="#favourites"
            className="flex items-center gap-2"
            onClick={toggleMenu}
          >
            <PiHeartStraight /> Favourites
          </a>
          <a
            href="#cart"
            className="flex items-center gap-2"
            onClick={toggleMenu}
          >
            <FaCartShopping /> Cart
          </a>
          <button
            onClick={toggleMenu}
            className="border w-full text-center py-2 rounded-md font-bold"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
