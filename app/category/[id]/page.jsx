"use client";
import { useGetCategoryQuery } from "@/app/services/api";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCategoryQuery(id);

  if (error)
    return <p className="h-[100vh] text-center p-5">There was an error.</p>;
  if (isLoading) return <p className="h-[100vh] text-center p-5">Loading...</p>;

  console.log("category data: ", data );

  return (
    <div className="h-[100vh] bg-white">
      
    </div>
  );
}
