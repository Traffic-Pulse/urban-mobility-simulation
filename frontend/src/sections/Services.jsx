import React from 'react'
import ServiceCard from '../components/ServiceCard'

import { services } from "../constants";

const Services = () => {
  return (
    <div className='py-[50px] px-20'>
      <h3 className='font-palanquin text-center text-4xl font-bold mb-10'>
      Current Challenges
      </h3>
      <p className='lg:max-w-max info-text mb-10 text-center'>
        At Traffic Pulse, we offer cutting-edge solutions to revolutionize urban mobility analysis and traffic management. Our expertise includes real-time traffic simulation, road optimization, CO2 emission reduction, and sustainable urban mobility.
      </p>
      <section className='max-container flex justify-center flex-wrap gap-9'>
        {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </div>
    
  )
}

export default Services
