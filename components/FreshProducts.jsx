"use client";
import React, { useState } from "react";
import Title from "./Title";
import { useGetProductsQuery } from "@/app/services/api";

const categories = ["All", "Fruits", "Vegetables", "Salad"];

export default function FreshProducts() {
  const { data, error, isLoading } = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error!</p>;
 

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto bg-[#FFFFFF]">
      <div className="text-center mb-6">
        <Title title="Our Products" />
        <h2 className="text-2xl md:text-3xl font-bold mt-4 text-[#212337]">
          Our Fresh Products
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-xs md:w-1/3">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      <div className="flex justify-center gap-1 md:gap-2 mb-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-1 rounded-md border hover:bg-green-100 text-xs text-gray-500"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data?.data
          ?.slice((0, 11))
          .map((product) => (
            <div
              key={product?.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-full bg-gray-100 p-4 rounded-xl mb-4">
                <img
                  src={product?.images}
                  alt={product?.productName}
                  className="h-40 w-full object-contain mx-auto"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {product?.productName}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Price: ${product?.price}
              </p>
              <button className="px-2 py-1 rounded-lg border border-gray-400 text-gray-600 w-full transition">
                Add to Cart
              </button>
            </div>
          ))}
      </div>

      <div className="text-center my-4 text-sm font-semibold ">
        <button className="text-[#FF6A19] border border-[#FF6A19] rounded-md py-3 px-5">
          See All Products
        </button>
      </div>
    </div>
  );
}
