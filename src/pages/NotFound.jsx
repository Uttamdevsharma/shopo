import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center p-6 text-center">
      <h2 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h2>
      <p className="text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
