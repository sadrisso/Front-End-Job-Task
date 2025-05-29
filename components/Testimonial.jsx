import React from "react";
import Title from "./Title";

export default function Testimonial() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
        {/* Container for the testimonial card and decorative elements */}
        {/* Relative positioning allows absolute positioning of decorative elements within it */}
        <div className="relative w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

          {/* Testimonial badge */}
          <div className="flex justify-center mb-4">
            <Title title="Testimonial"/>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4 leading-tight">
            What Our Customers Say
          </h2>

          {/* Subheading/description */}
          <p className="text-xs text-gray-600 text-center md:w-1/3 mx-auto mb-12">
            Don't just take our word for it—here's what some of our customers
            have to say about their experience with Fresh Harvest.
          </p>

          {/* Testimonial Card */}
          {/* Uses flexbox for horizontal layout on larger screens, stacks vertically on small screens */}
          <div className="flex flex-col lg:flex-row items-center justify-center rounded-2xl p-2 sm:p-8 lg:p-10 gap-6 lg:gap-12">
            {/* Image container */}
            <div className="flex-shrink-0 w-40 h-52 sm:w-48 sm:h-48 lg:w-52 lg:h-62 rounded-[40%] overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co/JxLzkt4/happy-Customer-3.jpg" // Placeholder image for Jane Doe
                alt="Jane Doe"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial content */}
            <div className="text-center lg:text-left bg-gray-100 rounded-xl p-3 sm:p-8">
              <p className="text-xm sm:text-sm text-gray-700 leading-relaxed mb-6">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs."
              </p>
              <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                Jane Doe -{" "}
                <span className="text-gray-600 font-normal">
                  Professional chef
                </span>
              </p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-12 gap-3">
            <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
