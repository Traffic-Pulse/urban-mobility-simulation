import React from 'react'
import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <nav class="fixed top-0 inset-x-0 z-50 text-white bg-gray-800 font-medium shadow-lg">
        <div class="flex mx-auto items-center bg-red-800 ltr">
            <div className='ml-4 flex justify-between items-center'>
                <img src={logo} alt='logo' width={60} height={60} className='me-2' />
                <h5 className='text-lg'>Traffic & Urban Mobility Simulation</h5>
            </div>
            <ul class="ml-auto text-base text-white flex justify-between me-2">
                <li>
                    <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Home</a>
                </li>
                <li>
                    <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Contact Us</a>
                </li>
                <li>
                    <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Privacy</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
