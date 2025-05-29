import React from "react";
import Title from "./Title";

const PromoBanner = () => {
  return (
    <div>
      <section className="max-w-full bg-[url('https://i.ibb.co/0j2K7b7M/vegetable-Background.jpg')] bg-cover bg-center py-12 px-4 md:px-8 lg:px-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="space-y-6">
          <Title title="Special Offer"/>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Seasonal Fruit Bundle
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Discount up to{" "}
            <span className="text-orange-500 font-bold">80% OFF</span>
          </p>

          {/* Static Countdown */}
          <div className="flex gap-3 sm:gap-6 text-center">
            {[
              { label: "Days", value: 3 },
              { label: "Hour", value: 18 },
              { label: "Min", value: 54 },
              { label: "Second", value: 21 },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white shadow-md px-4 py-3 rounded-lg w-16 sm:w-20 md:w-24"
              >
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 capitalize mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Code */}
          <div>
            <span className="inline-block mt-4 bg-green-700 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wide">
              CODE : <span className="text-yellow-300">FRESH28</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromoBanner;
