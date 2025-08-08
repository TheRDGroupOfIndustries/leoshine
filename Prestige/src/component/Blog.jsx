import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data";

export default function Blog() {
  return (
    <section className="container my-5">
      <div className="row g-4">
        {blogs.map((b) => (
          <div key={b.id} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card flex-fill h-100 shadow-sm">
              <img src={b.image} className="card-img-top" alt={b.alt} />

              <div className="card-body d-flex flex-column">
                <h6 className=" card-subtitle text-reset p-1">{b.date}</h6>
                <h5 className="card-title p-1">{b.title}</h5>
                
                

                
                <Link to={`/blog/${b.id}`} className="btn btn-danger mt-3 align-self-start">
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