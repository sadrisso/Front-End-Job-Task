import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6">
              Fresh, Organic, Local Produce
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover the best handpicked fruits and vegetables grown locally.
              Taste the difference in every bite.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/xgmBLRj/organic-veggies.png"
              alt="Fresh produce"
              className="w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
