import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

import image1 from "../assets/carousel1.webp";
import image2 from "../assets/carousel2.webp";
import image3 from "../assets/carousel3.webp";
import image4 from "../assets/carousel4.webp";


const images = [image1, image2, image3, image4];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);


  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); 

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className="relative w-full h-96 md:h-[300px] lg:h-[500px] overflow-hidden bg-gray-900 rounded-lg shadow-2xl">
      
 
      <div className="relative w-full h-full">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

    
      <button
        className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg md:text-xl group-hover:scale-110 transition-transform" />
      </button>

    
      <button
        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg md:text-xl group-hover:scale-110 transition-transform" />
      </button>

    
      <button
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
        onClick={toggleAutoPlay}
        aria-label={isAutoPlay ? "Pause auto-play" : "Start auto-play"}
      >
        {isAutoPlay ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
      </button>

    
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index 
                ? "bg-white shadow-lg scale-110" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((current + 1) / images.length) * 100}%` 
          }}
        />
      </div>

  
      <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {current + 1} / {images.length}
      </div>

  
      <div className="absolute bottom-16 md:bottom-20 left-4 md:left-6 right-4 md:right-6">
        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">
          Premium Kitchen Collection
        </h3>
        <p className="text-white/90 text-sm md:text-base max-w-md drop-shadow-lg">
          Discover our latest range of premium kitchen appliances designed for modern homes.
        </p>
      </div>
   
    </div>
  );
};

export default Carousel;