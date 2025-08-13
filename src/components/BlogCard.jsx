import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-all">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500">{blog.date}</p>
        <h3 className="mt-2 text-gray-800 font-semibold">{blog.title}</h3>
        <a
          href={blog.link}
          className="inline-block mt-4 bg-red-600 text-white px-4 py-1 text-sm rounded hover:bg-red-700 transition"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
