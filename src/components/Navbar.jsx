import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ShopX
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/cart" className="relative hover:text-blue-500">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
