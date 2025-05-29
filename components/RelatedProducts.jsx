import React from "react";
import Title from "./Title";
import { useGetProductsQuery } from "@/app/services/api";
import Link from "next/link";

export default function RelatedProducts() {
  const { data, error, isLoading } = useGetProductsQuery();
  if (error)
    return <p className="h-[100vh] text-center p-5">There was an error.</p>;
  if (isLoading) return <p className="h-[100vh] text-center p-5">Loading...</p>;

  return (
    <div>
      <section className="related-products-section">
        <div className="container text-center my-4">
          <Title title="Our Products" />
          <h2 className="section-title text-gray-800 text-2xl md:text-3xl font-bold">
            Related products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 my-8 px-2 md:px-20">
            {data?.data?.slice(0, 4).map((product) => (
              <div
                key={product?.id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
              >
                <Link
                  href={`/products/${product?.id}`}
                  className="w-full bg-gray-100 p-4 rounded-xl mb-4"
                >
                  <img
                    src={product?.images}
                    alt={product?.productName}
                    className="h-20 sm:h-30 md:h-35 lg:h-40 w-full object-contain mx-auto"
                  />
                </Link>

                <Link
                  href={`/products/${product?.id}`}
                  className="font-semibold text-sm text-gray-800 mb-1"
                >
                  {product?.productName}
                </Link>
                <p className="text-xs text-gray-500 mb-1">
                  Price: ${product?.price}
                </p>
                <Link
                  href="/product/cart"
                  className="px-2 py-1 text-xs rounded-lg border border-gray-400 text-gray-600 w-full transition"
                >
                  Add to Cart
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
