import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const AboutUs = () => {
  const timeline = gsap.timeline({repeatDelay:2})
  useGSAP(()=>{
    timeline.to('h1', {
      opacity:1,
      y:0,
      
    })
    timeline.to('.pa1', {
      opacity:1,
      y:-10,
      ease:'power2.inOut',
      delay:1
     
    })
    timeline.to('.pa2', {
      opacity:1,
      y:-10,
      ease:'power2.inOut',
      delay:1
    })
    timeline.to('.pa3', {
      opacity:1,
      y:-10,
     ease:'power2.inOut',
     delay:1
    })
    timeline.to('.h2', {
      opacity:1,
      y:-10,
     ease:'power2.inOut',
     
    })
    timeline.to('.ul', {
      opacity:1,
      y:-10,
     ease:'power2.inOut',
     
    })
  })
  return (
    <div className="bg-gray-800 text-white    max-w-4xl mx-auto ">
      <h1  className="h1 opacity-0 text-3xl font-bold mb-4 text-teal-500" id='H1'>Welcome to our Grocery Store!</h1>
      <p className="mb-4 opacity-0 pa1" >
        We are committed to providing  fresh and high quality produce.
        Our mission is to promote healthy living by offering a wide variety of fresh fruits and vegetables.
      </p>
      <p className="mb-4 opacity-0 pa2">
        We are passionate about sourcing the best products and delivering them to you with care.
      </p>
      <p className="mb-4 opacity-0 pa3">
        Thank you for choosing our store for your grocery needs. We look forward to serving you and making your shopping experience delightful.
      </p>
      <h2 className="h2 opacity-0 text-2xl font-semibold text-teal-500 mt-6">Our Values</h2>
      <ul className="list-disc list-inside ml-4 ul opacity-0">
        <li className="mb-2">Quality Produce</li>
        <li className="mb-2">Sustainability</li>
        <li className="mb-2">Community Support</li>
        <li className="mb-2">Customer Satisfaction</li>
      </ul>
    </div>
  );
};

export default AboutUs;
