import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
    const{cartItems} = useCart();
    const itemCount = cartItems.reduce((sum,item)=> sum+item.quantity,0);


  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ShopX
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/cart" className="relative hover:text-blue-500">
          <FaShoppingCart className="text-2xl" />
          {itemCount > 0 && (
            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full  px-1">
              
                {itemCount}

            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
