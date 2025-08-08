import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { IoStorefrontSharp, IoPersonOutline } from "react-icons/io5";
import { FaChevronDown, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex w-full">
      <div className="bg-red-600 px-4 py-3 flex items-center">
        <button className="text-white text-sm font-medium flex items-center gap-2">
          More Brands <FaChevronDown className="text-xs" />
        </button>
      </div>

      <div className="flex justify-between items-center flex-grow bg-black text-white px-4 py-3">
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex gap-6 text-sm">
            <MenuItems />
          </div>
        </div>

        <div className="flex gap-4 text-xl">
          <div className="flex items-center gap-2 cursor-pointer">
            <IoStorefrontSharp size={25} />
            <span className="font-bold text-sm">Store Login</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <IoPersonOutline size={25} />
            <span className="font-bold text-sm">Account</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;