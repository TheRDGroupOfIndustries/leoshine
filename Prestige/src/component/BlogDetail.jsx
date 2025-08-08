import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs } from "../data";
import "./blog-detail.css";

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
      <div className="container my-5">
        <div className="alert alert-warning">Blog not found</div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
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
    <main className="blog-detail container my-5">
      <div className="mb-3">
        <button className="btn btn-danger py-2" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>

      <article className="card shadow-sm overflow-hidden">
        {blog.image && (
          <img
            src={blog.image}
            className="card-img-top blog-image"
            alt={blog.alt ?? blog.title}
            loading="lazy"
          />
        )}

        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
            <div>
              <h1 className="h4 card-title mb-1">{blog.title}</h1>
              <div className="text-muted small">
                {blog.date && <span className="me-3">{blog.date}</span>}
              </div>
            </div>

            <div className="mt-3 mt-md-0">
              <Link to="/" className="btn btn-outline-secondary btn-sm me-2">
                All Posts
              </Link>
               
            </div>
          </div>

          {blog.excerpt && (
            <p className="lead text-muted mb-3">{blog.excerpt}</p>
          )}

          {/* Blog content — if content is plain text. If you store HTML, be careful and sanitize before using dangerouslySetInnerHTML */}
          <div className="blog-content text-muted">
            <p>{blog.content}</p>
            {/* If you have more paragraphs, you can map them here */}
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <button
                className="btn btn-outline-secondary btn-sm me-2"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>

              <Link
                to={`/blog/${blogs[prevIndex].id}`}
                className="btn btn-outline-danger btn-sm me-2"
              >
                ← Previous
              </Link>

              <Link
                to={`/blog/${blogs[nextIndex].id}`}
                className="btn btn-danger btn-sm"
              >
                Next →
              </Link>
            </div>

            <div className="text-muted small">Article ID: {blog.id}</div>
          </div>
        </div>
      </article>
    </main>
  );
}