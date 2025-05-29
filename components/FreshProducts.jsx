"use client";
import React from "react";
import Title from "./Title";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/app/services/api";
import Link from "next/link";

export default function FreshProducts() {
  const {
    data: products,
    error: productsError,
    isLoading: productsIsLoading,
  } = useGetProductsQuery();

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useGetCategoriesQuery();

  if (productsIsLoading || categoriesIsLoading) return <p className="text-black text-center p-5 h-[95vh]">Loading...</p>;
  if (productsError || categoriesError) return <p className="text-black text-center p-5 h-[95vh]">There was an error loading data.</p>;

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
        {categories?.data?.map((cat) => (
            <button
              key={cat?.id}
              className="px-4 py-1 rounded-md border hover:bg-green-100 text-xs text-gray-500"
            >
              {cat?.categoryName}
            </button>
          ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {products?.data?.slice(0, 8).map((product) => (
          <div
            key={product?.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
          >
            <Link href={`/products/${product?.id}`} className="w-full bg-gray-100 p-4 rounded-xl mb-4">
              <img
                src={product?.images}
                alt={product?.productName}
                className="h-20 md:h-40 w-full object-contain mx-auto"
              />
            </Link>
            
            <Link href={`/products/${product?.id}`} className="font-semibold text-sm text-gray-800 mb-1">
              {product?.productName}
            </Link>
            <p className="text-xs text-gray-500 mb-1">
              Price: ${product?.price}
            </p>
            <Link href="/product/cart" className="px-2 py-1 rounded-lg border border-gray-400 text-gray-600 w-full text-xs transition">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center my-6 text-sm font-semibold ">
        <Link
          href="/products"
          className="text-[#FF6A19] border border-[#FF6A19] rounded-md py-3 px-5"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
}
