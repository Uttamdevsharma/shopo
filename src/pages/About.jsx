import React from 'react';

const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 
                        sm:p-8 md:p-12
                        transition-shadow duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center sm:text-left">
        About This Project
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify sm:text-left sm:mb-8">
        This is a simple e-commerce web application built with React. It demonstrates the core
        functionalities of an online store such as browsing products, viewing product details,
        managing a shopping cart, and basic navigation between pages.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify sm:text-left sm:mb-8">
        The project is entirely frontend-based. Cart state is handled using the React Context API
        and routing is done using React Router. The data is static and cart state exists only during
        the current session.
      </p>

      <p className="text-gray-700 leading-relaxed text-justify sm:text-left">
        Built using modern tools like React Hooks, Context API, and Tailwind CSS, this project is
        responsive and designed to give a basic feel of a shopping experience without any backend.
      </p>
    </section>
  );
};

export default About;
