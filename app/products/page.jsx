'use client'
import React from 'react'
import { useGetProductsQuery } from '../services/api';
import Title from '@/components/Title';

export default function page() {
  const {
      data: products,
      error: productsError,
      isLoading: productsIsLoading,
    } = useGetProductsQuery();

    if (productsError) return <p>There was an error.</p>
    if (productsIsLoading) return <p>Loading...</p>

  return (
    <div className='bg-white p-4'>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products?.data?.map((product) => (
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
    </div>
  )
}
