import {useState, useEffect} from 'react'
import { items, headers } from './Constants/Constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { removeItemFromCart, addItemToCart, getCartItems } from '../firestore'
import { Link } from 'react-router-dom'

const Card = () => {
    const [cartItems, setCartItems] = useState([])

    // useEffect(()=>{
    //     const items = JSON.parse(localStorage.getItem('Items'))
    //     if(items)setCartItems(i=>[...i, items])
    // },[])

    // useEffect(()=>{
    //     if(cartItems)localStorage.setItem('Items', JSON.stringify(cartItems))
    // },[cartItems])

    // const isItemInCart = (item) => {
    //     return cartItems.some(cartItem => cartItem.id === item.id);
    //   };

    // const addToCart=(item)=>{
    //     const newCart=isItemInCart(item)?cartItems.filter(cartItem=>cartItem.id !== item.id):[...cartItems, item]
    //     setCartItems(newCart)
    // }
    // localStorage.clear()
    useEffect(() => {
        const loadCart = async () => {
          const cart = await getCartItems();
          setCartItems(cart);
        };
    
        loadCart();
      }, []);
    
      const handleAddToCart = async (item) => {
        const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
    
        if (isInCart) {
          await removeItemFromCart(item.id);
          setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        } else {
          await addItemToCart(item);
          setCartItems([...cartItems, item]);
        }
    }
  return (
    <>
    {headers.map((header, groupIndex)=>(
        <div key={groupIndex} id='body'>
            <div className='flex justify-center items-center  '>
                <h3 className=' text-gray-800 text-center py-2 rounded-lg shadow-2xl my-4  font-bold text-2xl bg-white px-4'>{header}</h3>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {items.filter((_, index)=>Math.floor(index/3)===groupIndex).map((item)=>(
                    <div key={item.id} className='bg-gray-600 shadow-xl rounded-lg relative'>
                       <span className='bg-gray-600 rounded-md text-gray-50 cursor-pointer inline-block overflow-hidden '>
                            <Link to={`/${item.id}`}>
                            <img src={item.image} alt="" /></Link>
                            <div className='p-1'>
                            <p className='text-sm mb-4'>{item.description}</p>
                            <h4 className='text-sm py-1 text-orange-400 absolute bottom-0 font-bold'>Ksh {item.price}</h4>
                            <button 
                            className='absolute bottom-0 right-0' onClick={()=>handleAddToCart(item)}><FontAwesomeIcon icon={cartItems.some(cartItem => cartItem.id === item.id) ? faCheckCircle : faCirclePlus} className='mr-1'/>
                            </button>
                            </div>
                        </span> 
                    </div>
                ))}
            </div>
        </div>
    ))}
    </>
  )
}

export default Card