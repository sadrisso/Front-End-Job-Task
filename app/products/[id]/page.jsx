"use client";
import { useGetProductQuery } from "@/app/services/api";
import RelatedProducts from "@/components/RelatedProducts";
import Title from "@/components/Title";
import { useParams } from "next/navigation";
import React, { useState } from "react";

// ProductDetail component
function ProductDetail() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const {
    data: product,
    error: productError,
    isLoading: productIsLoading,
  } = useGetProductQuery(id);

  if (productError) return <p className="h-[95vh]">Error occurred</p>;
  if (productIsLoading)
    return <p className="text-center p-5 h-[95vh]">Loading...</p>;

  console.log("Product: ", product?.data);

  // Function to handle quantity increase
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)); // Ensure quantity doesn't go below 1
  };

  return (
    // Main container for the entire product detail section
    <div className="min-h-screen bg-white font-inter py-8 px-4 sm:px-6 lg:px-8">
      {/* Main content area for product details */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:p-8 lg:p-10">
        {/* Product Image and Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-10">
          {/* Product Image Carousel/Display */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-lg h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
              <img
                src={product?.data?.images}
                alt={product?.data?.productName}
                className="w-full h-full object-cover border border-gray-300"
              />
            </div>
            {/* Small image indicators/thumbnails (optional, based on image) */}
            <div className="flex gap-2 mt-4">
              <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
            <Title title="Fruits" className="inline-block" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              {product?.data?.productName}
            </h2>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              {/* Star rating (using inline SVGs for simplicity) */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-2 text-gray-600 text-sm">5.0 (1 review)</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-4">
              ${product?.data?.price}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {product?.data?.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg font-medium text-gray-700 mr-4">
                Quantity
              </span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-800 border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
              <span className="ml-2 text-gray-600">/ kg</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Save as favorite
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.5 13 5.6 13h9.4a1 1 0 000-2H5.6l.5-5H17a1 1 0 00.95-.624l3-7A1 1 0 0019 1H3zm0 14a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Description and Reviews Buttons */}
        {/* Changed from tabs to buttons with appropriate styling */}
        <div className="flex items-center gap-1 justify-self-start md:justify-center md:space-x-4 mb-6 md:px-8">
          {" "}
          {/* Removed border-b and adjusted spacing */}
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 rounded-xl text-md text-sm transition-colors duration-200 shadow-sm ${
              activeTab === "description"
                ? "bg-[#749B3F] text-white" // Active state styling
                : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Inactive state styling
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 rounded-xl text-md text-sm transition-colors duration-200 shadow-sm ${
              activeTab === "reviews"
                ? "bg-[#749B3F] text-white" // Active state styling
                : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Inactive state styling
            }`}
          >
            Reviews (1)
          </button>
        </div>

        {/* Tab Content */}
        <div className="md:pl-8">
          {activeTab === "description" && (
            <p className="text-gray-700 bg-[#F4F6F6] md:w-3/5 leading-relaxed p-2 md:p-4 rounded-xl text-sm">
              Our coconuts are sustainably grown, ensuring the best quality and
              taste. Each coconut is handpicked and carefully prepared, offering
              you the freshest product possible. Rich in healthy fats,
              electrolytes, and essential nutrients, coconuts provide both
              hydration and nourishment. Whether you're using the water, flesh,
              or milk, our coconuts bring versatility to your kitchen while
              supporting healthy living.
            </p>
          )}
          {activeTab === "reviews" && (
            <div className="text-gray-700">
              <h3 className="text-sm font-semibold mb-4 ">Customer Reviews</h3>
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetail;
