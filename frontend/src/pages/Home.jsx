import React from 'react'
import Hero from '../components/Hero'
import Services from '../sections/Services'
import OurTeam from '../sections/OurTeam'
import Feature1 from '../sections/Feature1'
import Feature2 from '../sections/Feature2'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature1 />
      <Services />
      <Feature2 />
      <OurTeam />
      <Footer />
    </div>
  )
}

export default Home
