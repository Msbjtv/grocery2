import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faWhatsapp, faTiktok} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10 ">
      <div className="container mx-auto px-4 flex flex-row sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          
          <p><a href={`tel:${+254704489912}`} className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} size={24} className="mr-2" />
            Call Us
          </a></p>
          <p className='text-lg'><a href="https://wa.me/254704489912" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} size={10}  />&nbsp;
            WhatsApp Us
          </a></p>
        </div>
        <div className="mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            
          </div>
        </div>

      </div>
      <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Grocery Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer