import React from "react";
import { blogsData } from "../data/blogs";
import BlogCard from "../components/BlogCard";

const ExploreBlogs = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Explore Blogs</h2>
        <a
          href="#"
          className="text-red-600 text-sm font-medium hover:underline flex items-center gap-1"
        >
          VIEW ALL →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ExploreBlogs;
