import React from 'react'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import Image from "../assets/1.jpg"


function Home() {
  return (
    <>
        <Hero 
          imageSrc={Image}
          Heading="Welcome to Our Travel Agency"
          subHeading="We offer the best travel packages to make your dream vacation a reality."
          description="Explore our services and book your next adventure with us!"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>

  )
}

export default Home