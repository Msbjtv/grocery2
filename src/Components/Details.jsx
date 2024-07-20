import React, { useState } from 'react'
import { items } from './Constants/Constants'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id}= useParams()
    const item = items.find(item=> item.id === parseInt(id))
    const [mainImg, setMainImg]=useState(item.images[1])

    if(!item)return <div>Item not found</div>
  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
      <div className='flex flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-1/2 mb-4 md:mb-0'>
            <div>
                <img src={mainImg} alt={item.name} className="w-full h-auto mb-4" />
            </div>
            <div className='flex justify-between'>
            {item.images.map((image,index)=>(
                <div className='w-[22%] h-16 object-cover cursor-pointer' key={index}>
                    <img src={image} alt="" onClick={()=>setMainImg(image)}
                />
                </div>
            ))}
            </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-4'>
            <p>{item.about}</p>
            <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
            <p>{item.health}</p>
            <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
            <p>{item.moreInfo}</p>
        </div>
      </div>
    </div>
  )
}

export default Details