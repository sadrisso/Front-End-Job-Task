import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#F0F0F0] py-16 px-4 sm:px-6 lg:px-8 md:h-[500px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <Title title="Welcome to fresh harvest"/>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#212337] mb-6">
              Fresh Fruits and Vegetables
            </h1>
            <p className="text-xs md:w-2/3 text-[#4A4A52] mb-8">
              At Fresh Harvest we are passionate about providing you with the freshest and most flavorful fruits and vegetables
            </p>
            <button className="px-6 py-3 bg-[#FF6A19] text-white rounded-xl font-semibold text-sm transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
