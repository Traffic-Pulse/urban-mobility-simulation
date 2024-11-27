import React, { useState } from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-24 text-white bg-[#ffffff] font-medium shadow-md py-2">
      <div className="flex mx-auto items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="logo" width={100} height={100} className="mr-2" />
          <h5 className="text-[20px] sm:text-[28px] text-[#1A2B6D]">Traffic & Urban Mobility Simulation</h5>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-[#1A2B6D]">
            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-2xl`} />
          </button>
        </div>

        {/* Links */}
        <ul className={`sm:flex sm:space-x-8 space-y-4 sm:space-y-0 ${isMenuOpen ? 'block' : 'hidden'} absolute sm:relative top-24 sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent text-[#1A2B6D] font-medium`}>
          <li>
            <NavLink className="block px-4 py-2 text-[20px] hover:text-[#D41317]" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 text-[20px] hover:text-[#D41317]" to="/simulation">Simulation</NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 text-[20px] hover:text-[#D41317]" to="/policies">Our Services</NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 text-[20px] hover:text-[#D41317]" to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <a 
              className="block px-4 py-2 text-[20px] hover:text-[#D41317]" 
              href="https://github.com/Traffic-Pulse/urban-mobility-simulation" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
