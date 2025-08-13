import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blog";

export default function Blog() {
  return (
    <section className="px-14 my-12">
      <h1 className="text-4xl font-bold pt-4 pb-2 text-center">Our Blogs</h1>
      <p className="text-gray-500 text-base text-center mb-8">
        Read our blogs and get informations of many different use cases
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <div key={b.id} className="flex">
            <div className="card flex-1 h-full shadow-lg rounded-lg overflow-hidden">
              <img
                src={b.image}
                className="w-full h-56 object-cover"
                alt={b.alt}
              />

              <div className="p-4 flex flex-col h-full">
                <h6 className="text-gray-500 text-sm mb-2">{b.date}</h6>
                <h5 className="font-semibold text-xl mb-4">{b.title}</h5>

                <Link
                  to={`/blog/${b.id}`}
                  className="btn btn-danger mt-3 self-start px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
