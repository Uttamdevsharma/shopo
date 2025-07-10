import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.js';
import { useCart } from '../contexts/CartContext.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product Not Found</h2>
        <p className="mt-4">
          <Link to="/" className="text-blue-500 underline hover:text-blue-600">
            Go back to Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">${product.price}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
