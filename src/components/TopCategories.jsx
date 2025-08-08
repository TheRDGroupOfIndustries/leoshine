import React from "react";
import small1 from "../assets/top-catogriesImages/1.webp";
import small2 from "../assets/top-catogriesImages/2.webp";
import small3 from "../assets/top-catogriesImages/3.webp";
import small4 from "../assets/top-catogriesImages/4.webp";
import large from "../assets/top-catogriesImages/5.webp";

const categories = [
  { image: small1, name: "Pressure Cookers" },
  { image: small2, name: "Small Appliances" },
  { image: small3, name: "Gas Stove" },
  { image: small4, name: "Cookware Products" },
];

const TopCategories = () => {
  return (
    <div className="w-full px-4 md:px-12 py-8">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Top Categories
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
    
        <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer h-[220px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <h2 className="text-white text-lg font-semibold transition-all duration-300 group-hover:-translate-y-2">
                  {item.name}
                </h2>
                <button className="mt-1 px-4 py-2 bg-red-500 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
                  SHOP NOW &gt;
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="group w-full md:w-1/3 relative overflow-hidden rounded-xl shadow-md cursor-pointer h-[455px]">
          <img
            src={large}
            alt="Large Category"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-white text-2xl font-semibold transition-all duration-300 group-hover:-translate-y-2">
             Mixer Grinder
            </h2>
            <button className="mt-1 px-4 py-2 bg-red-500 text-white text-sm rounded-md shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
              SHOP NOW &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
