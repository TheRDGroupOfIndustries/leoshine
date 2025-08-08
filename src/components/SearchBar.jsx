import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import MenuItems from "./MenuItems";

const SearchBar = () => {
  const { cartItems, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <div className="bg-gray-50 border-t py-3 px-4 md:px-10 lg:px-36 flex items-center justify-between gap-4">
      <button
        className="text-2xl text-gray-700 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </button>

      <div className="text-2xl font-extrabold tracking-wide text-red-600">
        LEOSHINE
      </div>

      <div className="relative flex items-center">
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setIsSearchExpanded(!isSearchExpanded)}
        >
          <FaSearch />
        </button>
        {isSearchExpanded && (
          <input
            type="text"
            placeholder="Search on LEOSHINE"
            className="absolute left-0 top-full mt-2 w-full max-w-xs px-4 py-2 text-sm outline-none border rounded-md md:hidden"
          />
        )}
        <div className="hidden md:flex w-full max-w-xs border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search on LEOSHINE"
            className="w-full px-4 py-2 text-sm outline-none"
          />
          <button className="bg-red-500 text-white px-4">
            <FaSearch />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-black text-white p-6 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          className="text-white text-2xl mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaBars />
        </button>
        <MenuItems />
      </div>

      <div className="relative cursor-pointer" onClick={toggleCart}>
        <FaShoppingCart className="text-2xl text-gray-700 hover:text-red-500" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;