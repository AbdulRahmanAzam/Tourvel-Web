import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Image from  '../assets/4.jpg'

function Service() {
  return (
    <>
    <Hero
          imageSrc={Image}
          Heading="Our Services"
      subHeading="Discover the range of travel services we offer."
      description="From flight bookings to hotel reservations, we've got you covered."
      />
    <Footer />
      </>
  )
}

export default Service