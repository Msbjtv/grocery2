import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='h-[50vh] flex flex-col'>
       <div className='h-[50vh] relative bg-cover bg-center' style={{backgroundImage:`url('/background/bg1.jpg')`}}>
            {/* <img src="/background/bg1.jpg" alt="" /> */}
            <h1 className='font-semibold  text-gray-50 text-2xl absolute   top-5 md:bg-black md:bg-opacity-20 md:text-white'>Welcome to our Grocery Store</h1> 
            <p className='text-gray-100 absolute 
            top-24 sm:top-20  w-[50%] right-0  bg-black bg-opacity-10 rounded-md pl-2'>Discover a world of nourishing groceries, carefully curated to support your health and well-being</p>
            <div className='absolute bottom-1'>
                <button className='rounded-md p-1  bg-teal-700 mx-2 text-orange-400 hover:bg-teal-600 text-xl'><a href="#body">Shop Now</a></button>
                <button className='rounded-md p-1  bg-gray-700 mx-2 text-gray-50 hover:bg-gray-600 border border-gray-50 text-xl'> <Link to='/about' >Learn More</Link> </button>
            </div>
       </div>
    </div>
  )
}

export default Hero