import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <Navbar />
      <SearchBar />
    </header>
  );
};

export default Header;
