import React from 'react'
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 text-white bg-gray-800 font-medium shadow-lg">
        <div className="flex mx-auto items-center bg-red-800 ltr">
            <div className='ml-4 flex justify-between items-center'>
                <img src={logo} alt='logo' width={60} height={60} className='me-2' />
                <h5 className='text-lg'>Traffic & Urban Mobility Simulation</h5>
            </div>
            <ul className="ml-auto text-base text-white flex justify-between me-2">
                <li>
                    <NavLink className="md:p-4 py-2 block hover:text-purple-400" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="md:p-4 py-2 block hover:text-purple-400" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="md:p-4 py-2 block hover:text-purple-400" to="/policies">Policies</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
