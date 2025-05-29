"use client";
import React from 'react';
import Title from './Title';

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('https://i.ibb.co/HT5dTxTT/Adobe-Stock-335745675-Preview.jpg')] bg-cover bg-center w-full h-full" />
        <div className="absolute inset-0  bg-opacity-30" />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-[500px] md:min-h-[600px] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center absolute">
          {/* Left content */}
          <div className="text-left text-black ">
            <div className="mb-4">
              <Title title="Welcome to Fresh Harvest"/>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight mb-4 text-gray-800">
              Fresh Fruits and Vegetables
            </h1>
            
            <p className="text-opacity-90 text-xs text-gray-600 max-w-[450px] mx-auto md:mx-0 mb-8">
              At Fresh Harvest, we are passionate about providing you with the freshest
              and most flavorful fruits and vegetables
            </p>
            
            <button className="px-8 py-3 text-white bg-[#FF6A19] hover:bg-[#e55c0e] rounded-xl font-semibold text-base md:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FF6A19]/30">
              Shop Now
            </button>
          </div>
          
          {/* Special offer card */}
          <div className="relative top-40 -left-80">
            <img className='w-34 h-20' src="https://i.ibb.co.com/5K8JHxB/Special-Offer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;