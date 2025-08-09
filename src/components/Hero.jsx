import React from 'react'
import Destination from './Destination'

function Hero(props) {
  return (
    <div className='w-full relative'>
        {/* Full-width image that starts from the very top */}
        <img src={props.imageSrc} alt="" className='w-full h-screen object-cover' />
        
        {/* Optional content overlay */}
        <div className='absolute inset-0 flex items-center justify-center bg-black/15'>
          <div className='text-center text-white'>
            <h1 className='text-6xl font-bold mb-4'>{props.Heading}</h1>
            <p className='text-xl mb-2'>{props.subHeading}</p>
            <p className='text-lg'>{props.description}</p>
            <button className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-2xl mt-4 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
              Travel Plan
            </button>
          </div>
        </div>

        
    </div>
  )
}

export default Hero