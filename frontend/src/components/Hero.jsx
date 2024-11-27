import React from 'react'
import HeroVideo from '../images/Hero_video.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative h-screen-minus-header flex flex-col xl:flex-row justify-center max-container'
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-left px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full w-full">
        <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Traffic Pulse:
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Redefine Traffic
        </p>
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
          Redefine Cities
        </p>
        <Link
          to="/simulation"
          className="max-w-max px-6 py-3 bg-white text-[20px] text-[#1A2B6D] font-semibold rounded-lg shadow-md hover:text-[#D41317] transition"
        >
          Simulation
        </Link>
      </div>
    </section>
  )
}

export default Hero;
