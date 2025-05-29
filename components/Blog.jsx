'use client'
import React from "react";
import Title from "./Title";

export default function Blog() {
  // Array of blog post data to easily map and render multiple posts
  const blogPosts = [
    {
      id: 1,
      date: "May 23, 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      image: "https://i.ibb.co/V0QWtpq5/fruits-1.webp", // Placeholder image
    },
    {
      id: 2,
      date: "May 23, 2024",
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      image: "https://i.ibb.co/zThwPkWq/fruits-2.jpg", // Placeholder image
    },
    {
      id: 3,
      date: "May 23, 2024",
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      image: "https://i.ibb.co/8Djbn2Q3/fruits-3.jpg", // Placeholder image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      {/* Container for the blog content and decorative elements */}
      {/* Relative positioning allows absolute positioning of decorative elements within it */}
      <div className="relative w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* "Our Blog" badge */}
        <div className="flex justify-center mb-4">
          <Title title="Our Blogs"/>
        </div>

        {/* Main heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4 leading-tight">
          Fresh Harvest Blog
        </h2>

        {/* Subheading/description */}
        <p className="text-xs text-gray-600 text-center md:w-1/3 mx-auto mb-12">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>

        {/* Blog Posts Grid */}
        {/* Uses a responsive grid layout for blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden flex flex-col"
            >
              {/* Blog Post Image */}
              <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>

              {/* Blog Post Content */}
              <div className="py-4 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xs font-bold text-gray-800 mb-4 leading-tight flex-grow">
                  {post.title}
                </h3>
                {/* Read More link with arrow */}
                <a
                  href="#"
                  className="text-red-600 text-xs hover:text-green-800 transition-colors duration-200 flex items-center"
                >
                  Read More
                  <span className="ml-2">→</span> {/* Unicode arrow */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
