import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header className='bg-teal-500 text-white flex justify-between items-center py-2 w-full px-4'>
        <h1>Welcome</h1>
        <nav >
            <ul className='flex font-medium items-center'>
                <li>
                    <NavLink to='/' className={({isActive})=>
                    `block  pr-2 pl-3 duration-200  ${isActive? "text-gray-100":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-gray-300`
                    }>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=>
                    `block  pr-2 pl-3 duration-200  ${isActive? "text-gray-100":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-gray-300`}>
                    About us
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/' className={({isActive})=>
                    `block  pr-2 pl-3 duration-200  ${isActive? "text-gray-100":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-gray-300`}>
                    contact
                    </NavLink>
                </li> */}
            </ul>
        </nav>
        <Link to="/cart" className="text-orange-400 text-xl">
                <FontAwesomeIcon icon={faCartShopping} />
                </Link>
    </header>
  )
}

export default Header