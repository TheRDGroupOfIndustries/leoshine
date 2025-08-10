import React, { useEffect, useState, useRef } from "react";
import "./../styles/testimonials.css";

const testimonials = [
  {
    title: "Automatic whistle counter is a breeze",
    content:
      "The Prestige PIC 3.1 V3 induction cooktop is a smart choice for Indian cooking. Its automatic whistle counter is a game-changer, letting you focus...",
    name: "Abhishek",
    city: "Bangalore",
    stars: 5,
    avatar: "https://shop.ttkprestige.com/media/eighteentech/testimonial/m/a/male_avatar-removebg-preview.png"
  },
  {
    title: "Loving the Prestige Omega Deluxe – Heats Fast, Cooks Even, Cleans Easy!",
    content:
      "This Prestige Omega Deluxe Granite cookware set is very good! The pan heats up super fast and cooks everything evenly. Also the cleanup...",
    name: "Kanika Singh",
    city: "Chennai",
    stars: 5,
    avatar: "https://shop.ttkprestige.com/media/eighteentech/testimonial/f/e/female_avatar-removebg-preview.png"
  },
  {
    title: "Healthy and Crispy food without guilt",
    content:
      "The Prestige Nutrifry Digital Air Fryer is like a magic box for crispy, healthy food! With easy-to-use settings and a big basket, you can...",
    name: "Sneha Joshi",
    city: "Hyderabad",
    stars: 5,
    avatar:"https://shop.ttkprestige.com/media/eighteentech/testimonial/f/e/female_avatar-removebg-preview.png "
  },
  {
    title: "Great build quality and easy to use",
    content:
      "Compact, sleek and cooks evenly. Very impressed with the product's build quality and user-friendly controls.",
    name: "Rahul",
    city: "Mumbai",
    stars: 5,
    avatar: "https://shop.ttkprestige.com/media/eighteentech/testimonial/m/a/male_avatar-removebg-preview.png"
  },
   {
    title: "Great build quality and easy to use",
    content:
      "Compact, sleek and cooks evenly. Very impressed with the product's build quality and user-friendly controls.",
    name: "Rahul",
    city: "Mumbai",
    stars: 5,
    avatar: "https://shop.ttkprestige.com/media/eighteentech/testimonial/m/a/male_avatar-removebg-preview.png"
  },
];

function StarRow({ count = 5 }) {
  const stars = Array.from({ length: count });
  return (
    <div className="flex mb-2" aria-hidden="true">
      {stars.map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#f6c94e"
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.431L23.5 9.748l-5.75 5.604L19.336 24 12 19.771 4.664 24l1.586-8.648L.5 9.748l7.832-1.73L12 .587z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= 992) setSlidesToShow(3); // lg
      else if (w >= 768) setSlidesToShow(2); // md
      else setSlidesToShow(1); // sm
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  useEffect(() => {
    // keep index within bounds when slidesToShow changes
    if (index > maxIndex) setIndex(maxIndex);
  }, [slidesToShow, maxIndex, index]);

  function prev() {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }
  function next() {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }

  // keyboard support
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className="pt-5">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-bold text-3xl">Loved By Millions Of Happy Customers</h2>
          <p className="text-gray-500 text-sm">
            Heart warming experiences shared by our customers
          </p>
        </div>

        <div className="relative">
          {/* Left control */}
          <button
            className="circle-nav left absolute top-1/2 transform -translate-y-1/2 left-0 bg-white rounded-full shadow-md p-2"
            aria-label="Previous testimonials"
            onClick={prev}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#222" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Right control */}
          <button
            className="circle-nav right absolute top-1/2 transform -translate-y-1/2 right-0 bg-white rounded-full shadow-md p-2"
            aria-label="Next testimonials"
            onClick={next}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#222" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>

          <div className="slider-viewport" ref={containerRef}>
            <div
              className="slider-track flex items-stretch"
              style={{
                transform: `translateX(-${(index * 100) / slidesToShow}%)`,
                width: `${(testimonials.length * 100) / slidesToShow}%`,
              }}
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className="testimonial-card p-4 mr-3 flex-shrink-0"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="p-3 bg-gray-100 rounded-3xl h-full flex flex-col justify-between">
                    <div>
                      <StarRow count={t.stars} />
                      <h6 className="font-semibold">“{t.title}”</h6>
                      <p className="text-gray-500">{t.content}</p>
                      <a href="#!" className="text-red-600 font-medium">
                        Read More &gt;
                      </a>
                    </div>

                    <div className="flex items-center mt-4">
                      <img
                        src={t.avatar}
                        alt=""
                        className="avatar rounded-full mr-3"
                        width="56"
                        height="56"
                      />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-gray-500 text-xs">{t.city}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Optional indicators */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`indicator btn ${idx === index ? "bg-blue-600" : "bg-gray-300"} h-2 w-2 mx-2 rounded-full`}
              onClick={() => setIndex(idx)}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
