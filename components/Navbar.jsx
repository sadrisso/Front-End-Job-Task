"use client";
import React, { useState } from "react";
import { PiHeartStraight } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import LoginModal from "./LoginModal";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const pathname = usePathname();

  return (
    <div>
      <div className="max-w-8xl mx-auto px-2 md:px-30 py-2 flex justify-between items-center sticky top-0 z-10 bg-white shadow h-14">
        {/* Logo */}
        <Logo className="h-8 w-auto" />

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-black text-xs">
          <a
            href="/"
            className={`hover:text-green-600 pb-1 border-b-2 ${
              pathname === "/" ? "border-green-600" : "border-transparent"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-green-600 pb-1 border-b-2 ${
              pathname === "/about" ? "border-green-600" : "border-transparent"
            }`}
          >
            About
          </a>
          <a
            href="/products"
            className={`hover:text-green-600 pb-1 border-b-2 ${
              pathname === "/products"
                ? "border-green-600"
                : "border-transparent"
            }`}
          >
            Products
          </a>
          <a
            href="/contact"
            className={`hover:text-green-600 pb-1 border-b-2 ${
              pathname === "/contact"
                ? "border-green-600"
                : "border-transparent"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Icons */}
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
            <button
              onClick={handleOpenModal}
              className="border py-1 px-3 rounded-md font-bold"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f7f7f7] px-6 py-4 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={toggleMenu}>
            <IoMdClose className="text-2xl text-black" />
          </button>
        </div>
        <div className="space-y-4 text-sm font-medium text-gray-700 flex flex-col">
          <a href="/" className="hover:text-green-600">
            Home
          </a>
          <a href="#about" className="hover:text-green-600">
            About
          </a>
          <a href="/products" className="hover:text-green-600">
            Products
          </a>
          <a href="/contact" className="hover:text-green-600">
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
            onClick={() => {
              toggleMenu();
              handleOpenModal();
            }}
            className="border w-full text-center py-2 rounded-md font-bold"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Modal rendered outside of the sliding menu */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
