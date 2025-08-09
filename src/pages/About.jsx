import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { FaUsers, FaGlobe, FaAward, FaHeart, FaStar, FaPlane, FaMapMarkedAlt, FaHandshake } from 'react-icons/fa'
import Image from "../assets/2.jpg"
import Image1 from '../assets/img.jpg'
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/night.jpg"
import Image4 from "../assets/12.jpg"

function About() {
  const stats = [
    { icon: FaUsers, number: "50,000+", label: "Happy Travelers" },
    { icon: FaGlobe, number: "150+", label: "Destinations" },
    { icon: FaAward, number: "25+", label: "Awards Won" },
    { icon: FaHeart, number: "15+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: FaStar,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, ensuring that every journey exceeds your expectations."
    },
    {
      icon: FaPlane,
      title: "Adventure",
      description: "We believe that travel should be an adventure that enriches your life and creates unforgettable memories."
    },
    {
      icon: FaMapMarkedAlt,
      title: "Discovery",
      description: "We help you discover hidden gems and unique experiences that go beyond typical tourist destinations."
    },
    {
      icon: FaHandshake,
      title: "Trust",
      description: "We build lasting relationships with our clients through trust, transparency, and exceptional customer service."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: Image1,
      description: "With over 15 years in the travel industry, Sarah founded Tourvel with a vision to make extraordinary travel accessible to everyone."
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      image: Image2,
      description: "Michael ensures that every trip runs smoothly, managing our global network of partners and local guides."
    },
    {
      name: "Emma Rodriguez",
      position: "Travel Experience Designer",
      image: Image3,
      description: "Emma crafts unique itineraries that blend cultural immersion with adventure, creating truly personalized experiences."
    }
  ];

  return (
    <>
      <Hero
        imageSrc={Image}
        Heading="About Our Travel Agency"
        subHeading="We are dedicated to providing the best travel experiences."
        description="Our team of experts is here to help you every step of the way."
      />

      {/* Our Story Section */}
      <div className='w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md'>
              🌟 Our Story
            </div>
            <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6'>
              Crafting Dreams Into Reality
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
            <div className='space-y-6'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
                Where Every Journey Tells a Story
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Founded in 2010, Tourvel began as a small family business with a simple mission: to make extraordinary travel experiences accessible to everyone. What started as a passion project has grown into a trusted travel agency that has helped thousands of travelers create unforgettable memories.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                We believe that travel is more than just visiting new places—it's about connecting with different cultures, pushing your boundaries, and discovering new perspectives about the world and yourself.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Today, we're proud to be recognized as one of the leading travel agencies, but we've never forgotten our roots. We still approach every trip with the same personal care and attention to detail that we started with.
              </p>
            </div>
            <div className='relative'>
              <img 
                src={Image4} 
                alt="Our Story" 
                className='w-full h-96 object-cover rounded-3xl shadow-lg'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl'></div>
            </div>
          </div>

          {/* Statistics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='text-2xl text-white' />
                </div>
                <h4 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>{stat.number}</h4>
                <p className='text-gray-600 font-medium'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md'>
              💎 Our Values
            </div>
            <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6'>
              What Drives Us Forward
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Our core values guide everything we do, from planning your itinerary to supporting you throughout your journey.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='group bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                <div className='bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <value.icon className='text-2xl text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>{value.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className='w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md'>
              👥 Meet Our Team
            </div>
            <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6'>
              The People Behind Your Dreams
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Our passionate team of travel experts brings decades of combined experience to help you create the perfect journey.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div key={index} className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
                <div className='relative overflow-hidden'>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className='w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>{member.name}</h3>
                  <p className='text-blue-600 font-semibold mb-4'>{member.position}</p>
                  <p className='text-gray-600 leading-relaxed'>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
            Our Mission
          </h2>
          <p className='text-xl md:text-2xl text-blue-100 leading-relaxed mb-8'>
            "To inspire and enable people to explore the world by creating extraordinary travel experiences that enrich lives, broaden perspectives, and create lasting memories."
          </p>
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-8'>
            <p className='text-lg text-white leading-relaxed'>
              We are committed to sustainable tourism practices that respect local cultures and environments while providing authentic, transformative experiences for our travelers. Every journey we plan is designed to create positive impacts for both our clients and the destinations they visit.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default About