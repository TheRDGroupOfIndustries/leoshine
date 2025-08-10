import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs } from "../data/blog";
import "./../styles/blog-detail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find current index and blog
  const currentIndex = useMemo(
    () => blogs.findIndex((b) => String(b.id) === String(id)),
    [id]
  );
  const blog = blogs[currentIndex];

  // if not found
  if (!blog) {
    return (
      <div className="container mx-auto my-12">
        <div className="alert alert-warning">Blog not found</div>
        <button
          className="btn btn-secondary py-2"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    );
  }

  // set page title and scroll to top when blog changes
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${blog.title} | My Blog`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      document.title = prevTitle;
    };
  }, [blog.title]);

  // prev/next handlers (wrap around)
  const prevIndex = (currentIndex - 1 + blogs.length) % blogs.length;
  const nextIndex = (currentIndex + 1) % blogs.length;

  return (
    <main className="blog-detail container mx-auto my-12">
      <div className="mb-4">
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </div>

      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        {blog.image && (
          <img
            src={blog.image}
            className="w-full h-64 object-cover"
            alt={blog.alt ?? blog.title}
            loading="lazy"
          />
        )}

        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-semibold mb-2">{blog.title}</h1>
              <div className="text-gray-500 text-sm">
                {blog.date && <span className="mr-4">{blog.date}</span>}
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/"
                className="bg-transparent border border-gray-400 text-gray-700 text-sm py-1 px-4 rounded-full hover:bg-gray-200 transition"
              >
                All Posts
              </Link>
            </div>
          </div>

          {blog.excerpt && (
            <p className="text-lg text-gray-600 mb-4">{blog.excerpt}</p>
          )}

          <div className="text-gray-700 text-lg mb-6">
            <p>{blog.content}</p>
          </div>

          <hr />

          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-4">
              <button
                className="bg-transparent border border-gray-400 text-gray-700 text-sm py-1 px-4 rounded-full hover:bg-gray-200 transition"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>

              <Link
                to={`/blog/${blogs[prevIndex].id}`}
                className="bg-transparent border border-red-600 text-red-600 text-sm py-1 px-4 rounded-full hover:bg-red-100 transition"
              >
                ← Previous
              </Link>

              <Link
                to={`/blog/${blogs[nextIndex].id}`}
                className="bg-red-600 text-white text-sm py-1 px-4 rounded-full hover:bg-red-700 transition"
              >
                Next →
              </Link>
            </div>

            <div className="text-gray-500 text-sm">Article ID: {blog.id}</div>
          </div>
        </div>
      </article>
    </main>
  );
}
