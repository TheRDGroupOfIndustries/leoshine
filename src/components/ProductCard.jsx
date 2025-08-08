import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const {
    _id,
    images,
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
  } = product;

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `Check out this product: ${name}`
  )}`;

  return (
    <div className="relative bg-white border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 w-full">
    
      <div className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wide z-10">
        Bestseller
      </div>

      <Link to={`/product/${_id}`} className="w-full h-48 flex justify-center items-center mb-3">
        <img
          src={images?.[0]}
          alt={name}
          className="h-full object-contain"
        />
      </Link>


      <div className="flex flex-col gap-1 flex-grow">
        <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">{name}</h3>
        <div className="text-sm font-bold text-gray-900">₹{price.toFixed(2)}</div>
        <div className="text-xs text-gray-500">
          M.R.P: <s>₹{originalPrice.toFixed(2)}</s>{" "}
          <span className="text-green-600 font-semibold">{discount}% OFF</span>
        </div>
        <div className="text-xs text-gray-600 mt-1">⭐ {rating} | {reviews} Reviews</div>
      </div>

     
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => addToCart(product)}
         className="flex-1 text-xs bg-red-500 hover:bg-red-700 text-white font-medium py-3 px-5 rounded">
          Wishlist
        </button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-xs text-white bg-green-500 hover:bg-green-600 text-center py-3 px-5 font-medium rounded"
        >
          Enquiry
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
