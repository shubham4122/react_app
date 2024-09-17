import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Creative UI</div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-blue-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Services
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Contact
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Cart
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Profile
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
