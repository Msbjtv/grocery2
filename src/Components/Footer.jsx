import React from 'react'

const Footer = () => {
  return (
    <div  className='flex bg-white items-center pt-3'>
      <img src='/public/logo2.jpeg' alt="image not ound" width={60}/>
      <div>
        <h2> &copy; All rights reserved {new Date().getFullYear()} </h2>
        
      </div>
    </div>
  )
}

export default Footer