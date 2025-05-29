import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    // Main container for the entire footer section
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top section of the footer - main content columns */}
        {/* Uses a responsive grid for columns: 1 on mobile, 2 on medium, 4 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Fresh Harvests Logo and Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for the Fresh Harvests logo */}
            <Logo />
            
          </div>

          {/* Quick links 1 */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Quick links 1
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Detail Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links 2 */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Quick links 2
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Favorites
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Contact us
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center justify-center md:justify-start">
                {/* Phone icon (using inline SVG for simplicity) */}
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                1234567890
              </li>
              <li className="flex items-center justify-center md:justify-start">
                {/* Email icon (using inline SVG for simplicity) */}
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Freshharvests@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                {/* Location icon (using inline SVG for simplicity) */}
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Tanjung Sari Street, Pontianak, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Middle section - Accepted Payment Methods & Download App */}
        {/* Uses flexbox for horizontal layout on larger screens, stacks vertically on small screens */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-10 border-t border-gray-200 pt-8">
          {/* Accepted Payment Methods */}
          <div className="text-center md:text-left order-2 md:order-1"> {/* Order adjusted to match image */}
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Accepted Payment Methods:
            </h4>
            <div className="flex gap-4 justify-center md:justify-start"> {/* Adjusted justify-start */}
              {/* VISA icon */}
              <img
                src="https://placehold.co/60x40/F0F0F0/000000?text=VISA"
                alt="VISA"
                className="h-10"
                
              />
              {/* PayPal icon */}
              <img
                src="https://placehold.co/60x40/F0F0F0/000000?text=PayPal"
                alt="PayPal"
                className="h-10"
                
              />
              {/* Apple Pay icon */}
              <img
                src="https://placehold.co/60x40/F0F0F0/000000?text=ApplePay"
                alt="Apple Pay"
                className="h-10"
                
              />
            </div>
          </div>

          {/* Download App */}
          <div className="text-center md:text-right order-1 md:order-2"> {/* Order adjusted to match image */}
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Download App:
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end"> {/* Adjusted justify-end */}
              {/* App Store button */}
              <a href="#" className="inline-block">
                <img
                  src="https://placehold.co/120x40/000000/FFFFFF?text=App+Store"
                  alt="Download on the App Store"
                  className="h-10 rounded-md"
                  
                />
              </a>
              {/* Google Play button */}
              <a href="#" className="inline-block">
                <img
                  src="https://placehold.co/120x40/000000/FFFFFF?text=Google+Play"
                  alt="GET IT ON Google Play"
                  className="h-10 rounded-md"
                  
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright and Social Media */}
        {/* Uses flexbox to space items evenly or stack on small screens */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0 text-center sm:text-left">
            Copyright 2024, All Rights Reserved by Banana Studio
          </p>
          <div className="flex gap-4">
            {/* Facebook icon */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Twitter icon */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c1.802 0 3.473-.65 4.79-1.758 1.317-1.109 2.202-2.613 2.59-4.32a.75.75 0 00-.03-1.04l-.003-.003a.75.75 0 00-.81-.003c-1.79.79-3.78 1.25-5.83 1.25-2.05 0-4.04-.46-5.83-1.25a.75.75 0 00-.81.003l-.003.003a.75.75 0 00-.03 1.04c.388 1.707 1.273 3.211 2.59 4.32 1.317 1.108 2.988 1.758 4.79 1.758zM4.17 6.13c.42-.15.86-.25 1.3-.3a8.88 8.88 0 012.75-.4c.95 0 1.87.1 2.75.3a.75.75 0 00.75-.75V4.25a.75.75 0 00-.75-.75c-.95-.1-1.9-.15-2.85-.15-1.05 0-2.05.05-3.05.15a.75.75 0 00-.75.75v.8c0 .4.3.7.7.7zM12 2a10 10 0 100 20 10 10 0 000-20zM12 18a6 6 0 110-12 6 6 0 010 12z"></path>
              </svg>
            </a>
            {/* Instagram icon */}
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.9.346 4.144.665c-.75.318-1.39.758-1.94 1.315-.55.55-.997 1.19-1.315 1.94-.319.75-.533 1.62-.593 2.906-.058 1.28-.072 1.69-.072 4.9s.014 3.62.072 4.9c.06 1.28.274 2.15.593 2.906.318.75.758 1.39 1.315 1.94.55.55.997.997 1.94 1.315.75.319 1.62.533 2.906.593 1.28.058 1.69.072 4.9.072s3.62-.014 4.9-.072c1.28-.06 2.15-.274 2.906-.593.75-.318 1.39-.758 1.94-1.315.55-.55.997-.997 1.315-1.94.319-.75.533-1.62.593-2.906.058-1.28.072-1.69.072-4.9s-.014-3.62-.072-4.9c-.06-1.28-.274-2.15-.593-2.906-.318-.75-.758-1.39-1.315-1.94-.55-.55-.997-.997-1.94-1.315-.75-.319-1.62-.533-2.906-.593C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.426.42.179.77.418 1.08.72.31.302.559.65.72 1.08.177.42.371 1.05.426 2.227.056 1.265.07 1.647.07 4.85s-.014 3.585-.07 4.85c-.055 1.17-.249 1.805-.426 2.227-.179.42-.418.77-.72 1.08a2.59 2.59 0 01-1.08.72c-.42.177-1.05.371-2.227.426-1.265.056-1.647.07-4.85.07s-3.585-.014-4.85-.07c-1.17-.055-1.805-.249-2.227-.426a2.59 2.59 0 01-1.08-.72c-.302-.31-.559-.65-.72-1.08-.177-.42-.371-1.05-.426-2.227C2.16 15.667 2.146 15.26 2.146 12s.014-3.585.07-4.85c.055-1.17.249-1.805.426-2.227.179-.42.418-.77.72-1.08.302-.31.65-.559 1.08-.72.42-.177 1.05-.371 2.227-.426C8.333 2.16 8.74 2.146 12 2.146zM12 7.18c-2.652 0-4.82 2.168-4.82 4.82s2.168 4.82 4.82 4.82 4.82-2.168 4.82-4.82-2.168-4.82-4.82-4.82zm0 8c-1.764 0-3.2-1.436-3.2-3.2s1.436-3.2 3.2-3.2 3.2 1.436 3.2 3.2-1.436 3.2-3.2 3.2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
