import React from 'react'
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 text-white bg-[#fff7ec] font-medium shadow-md py-2">
        <div className="flex mx-auto items-center ltr">
            <div className='ml-4 flex justify-between items-center'>
                <img src={logo} alt='logo' width={60} height={60} className='me-2' />
                <h5 className='text-[24px] text-[#2f3b52] text-name'>Traffic & Urban Mobility Simulation</h5>
            </div>
            <ul className="ml-auto text-base text-white flex justify-between me-2">
                <li>
                    <NavLink className="md:p-4 py-2 block text-[#2f3b52] hover:text-[#14838a]" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="md:p-4 py-2 block text-[#2f3b52] hover:text-[#14838a]" to="/simulation">Simulation</NavLink>
                </li>
                <li>
                    <NavLink className="md:p-4 py-2 block text-[#2f3b52] hover:text-[#14838a]" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="md:p-4 py-2 block text-[#2f3b52] hover:text-[#14838a]" to="/policies">Policies</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
