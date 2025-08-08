import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp"; 
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
 

const images = [
  { src: img1, name: "Influencers" },
  { src: img2, name: "New Home" },
  { src: img3, name: "New Launches" },
  { src: img4, name: "Support" },
  { src: img5, name: "Wedding" },
  { src: img6, name: "Blogs" },
];

const ImageGallery = () => {
  return (
    <div className="bg-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.name}
              className="w-30 h-30 object-cover rounded-2xl  shadow-md hover:scale-105 transition"
            />
            <p className="text-sm font-bold mt-2 text-center">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
