import React from 'react';
import Title from './Title';

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* Left side with image and decorative content */}
      <div className="relative w-full">
        <img
          src="https://i.ibb.co/21bBztLN/fresh-Harvest-Man.jpg" // replace with your own image URL
          alt="Happy farmer with vegetables"
          className="w-full max-w-md mx-auto md:mx-0"
        />

        {/* Decorative badge */}
        <div className="absolute top-52 left-3/5 -translate-x-1/2 md:translate-x-0 md:left-52 flex items-center bg-white px-3 py-1 rounded-full shadow-md gap-2">
          <img
            src="https://i.ibb.co/vzY3nQZ/logo.png" // placeholder logo icon
            alt="logo"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span className="font-semibold text-xs md:text-sm text-black">Fresh Harvests</span>
        </div>

        {/* Product card example */}
        <div className="absolute -bottom-20 md:-bottom-8 left-3/4 md:left-88 -translate-x-1/2 bg-white shadow-md rounded-xl p-2 md:p-4 w-30 md:w-40">
          <img
            src="https://i.ibb.co/3YxCzJ9/lettuce.png" // placeholder product
            alt="Mushroom"
            className="w-full h-20 object-contain mb-2"
          />
          <h4 className="text-xs font-semibold text-black">Mushroom</h4>
          <p className="text-xs text-gray-500 mb-2">$2.3/kg</p>
          <button className="border border-gray-300 text-xs text-gray-800 rounded px-3 py-1 w-full transition">
            Add to cart
          </button>
        </div>
      </div>

      {/* Right side with text content */}
      <div className='mt-12 md:mt-0'>
        <Title title="About Us" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4">
          About Fresh Harvest
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed text-xs">
          Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce.
          We are passionate about providing you with the finest fruits, vegetables, and salad ingredients
          to nourish your body and delight your taste buds. With a commitment to excellence, sustainability,
          and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="border border-orange-500 text-orange-500 font-semibold px-5 py-2 rounded hover:bg-orange-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
