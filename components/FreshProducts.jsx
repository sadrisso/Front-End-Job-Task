'use client'
import React, { useState } from "react";
import Title from "./Title";
import { useGetProductsQuery } from "@/app/services/api";

const products = [
  { name: "Mushroom", price: "$2.3/kg", image: "🍄" },
  { name: "Mustard", price: "$1.3/kg", image: "🥬", highlight: true },
  { name: "Orange", price: "$4.2/kg", image: "🍊" },
  { name: "Pomegranate", price: "$11.2/kg", image: "🍎" },
  { name: "Kiwi", price: "$5.3/kg", image: "🥝" },
  { name: "Coconut", price: "$6.3/kg", image: "🥥" },
  { name: "Guava", price: "$2.2/kg", image: "🍈" },
  { name: "Eggplant", price: "$1.2/kg", image: "🍆" },
];

const categories = ["All", "Fruits", "Vegetables", "Salad"];

export default function FreshProducts() {

  const {data, error, isLoading} = useGetProductsQuery()
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>There was an error!</p>
  console.log("All Products Data: ", data?.data)

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-2 md:p-4 relative text-center hover:shadow-md transition"
          >
            <div className="text-5xl mb-4 bg-[#F4F6F6] py-10 rounded-lg">
              {product.image}
            </div>
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{product.price}</p>
            <button
              className={`w-full py-1 rounded text-sm font-medium border text-black ${
                product.highlight
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-white"
              }`}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center my-4 text-sm font-semibold "> 
        <button className="text-[#FF6A19] border border-[#FF6A19] rounded-md py-3 px-5">See All Products</button>
      </div>
    </div>
  );
}
