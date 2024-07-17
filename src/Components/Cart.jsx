import React, { useEffect, useState } from 'react'
import { removeItemFromCart, getCartItems, updateCartItemQuantity } from '../firestore'
import Confirmation from './Confirmation'

const Cart = () => {
    const [cartItems, setCartItems]=useState([])
    const [ConfMessage, setConfMessage]=useState(false)

    const phoneNumber = +254704489912
    useEffect(()=>{
        const loadCart=async()=>{
            const items = await getCartItems()
            setCartItems(items)
        }
        loadCart()
    },[])

    const removeFromCart= async(id)=>{
        await removeItemFromCart(id)
        setCartItems(cartItems.filter(item=>item.id !==id))
    }

    const quantityChange = async(id, quantity)=>{
        await updateCartItemQuantity(id, quantity);
        
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Number(quantity) } : item))
    };
    const generateOrder = (cartItems)=>{
        let message = 'Order Details:\n\n'
        let totalPrice = 0
        cartItems.forEach(item => {
            const itemTotal = item.quantity? item.price * item.quantity: item.price;
            totalPrice+=itemTotal;
            message += `Item: ${item.description}\n Quantity: ${item.quantity}\nPrice: ${itemTotal.toFixed(2)}\n\n`;
        });
        message+= `Total Price: ${totalPrice.toFixed(2)}`
        return message
    }
    const isMobileDevice = () => {
        return /Mobi|Android/i.test(navigator.userAgent);
      }
    const isDesktopDevice = () => {
        return !/Mobi|Android/i.test(navigator.userAgent);
      }
      
      const smsOrder = () => {
        const message = generateOrder(cartItems);
        const encodedMessage = encodeURIComponent(message);
        const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`;
        console.log('SMS URL:', smsUrl); // Debugging: Log the SMS URL
        window.location.href = smsUrl;
        setConfMessage(true);
    };
    
    
    const whatsappOrder = () => {
        const message = generateOrder(cartItems);
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setConfMessage(true)
      };
  return (
    <div className=" w-full">
    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
    <table className=" min-w-full bg-white ">
      <thead>
        <tr>
          <th className=" border py-2  sm:px-4 bg-gray-300">Image</th>
          <th className=" border py-2  sm:px-4 bg-gray-300">Description</th>
          <th className=" border py-2  sm:px-4 bg-gray-300">Quantity</th>
          <th className=" border py-2  sm:px-4 bg-gray-300">Price</th>
          <th className=" border py-2  sm:px-4 bg-gray-300">Total</th>
          <th className=" border py-2  sm:px-4 bg-gray-300">Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.id}>
            <td className="border  sm:px-4 py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            </td>
            <td className="border  sm:px-4 py-2">{item.description}</td>
            <td className="border  sm:px-4 py-2">
              <input
                type="number"
                value={item.quantity || 1}
                min="1"
                onChange={(e) => quantityChange(item.id, e.target.value)}
                className="w-16 p-1 border rounded"
              />
            </td>
            <td className="border  sm:px-4 py-2">{item.price}</td>

            <td className="border  sm:px-4 py-2">
                {item.quantity?(Number(item.quantity)) * (Number(item.price)):item.price}
            </td>
            <td className="border  sm:px-4 py-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="m-4 flex justify-between">
        {isMobileDevice() &&
        (<button
          onClick={smsOrder}
          className="bg-teal-500 text-white px-4 sm:px-4 py-2 rounded"
        >
          SMS Order
        </button>)}
        {isDesktopDevice() &&(
            <button
            onClick={whatsappOrder}
            className="bg-green-500 text-white px-1 sm:px-4 py-2 rounded"
            >
            Submit Order via WhatsApp
            </button>
        )}

      </div>
      {ConfMessage &&(
        <Confirmation
        message='Order Submitted successfully'
        onClose={()=>setConfMessage(false)}/>
      )}
  </div>
  )
}

export default Cart