import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-800 text-white p-6   max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-teal-500" id='H1'>Welcome to our Grocery Store!</h1>
      <p className="mb-4">
        We are committed to providing the freshest and highest quality produce to our community.
        Our mission is to promote healthy living by offering a wide variety of fresh fruits and vegetables.
      </p>
      <p className="mb-4">
        We are passionate about sourcing the best products and delivering them to you with care.
      </p>
      <p className="mb-4">
        Thank you for choosing our store for your grocery needs. We look forward to serving you and making your shopping experience delightful.
      </p>
      <h2 className="text-2xl font-semibold text-teal-500 mt-6">Our Values</h2>
      <ul className="list-disc list-inside ml-4">
        <li className="mb-2">Quality Produce</li>
        <li className="mb-2">Sustainability</li>
        <li className="mb-2">Community Support</li>
        <li className="mb-2">Customer Satisfaction</li>
      </ul>
    </div>
  );
};

export default AboutUs;
