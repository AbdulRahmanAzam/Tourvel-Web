import React from 'react'

function Destination() {
  return (
    <div className='w-full flex flex-col justify-center items-center p-8 min-h-screen'>
      {/* Header Section */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Popular Destinations</h1>
        <p className='text-lg text-gray-600'>Explore the world's most beautiful destinations with us.</p>
      </div>

      {/* Content Section */}
      <div className='flex flex-col items-center gap-6 max-w-6xl w-full'>
        {/* Text Content */}
        <div className='text-center max-w-4xl'>
          <h2 className='text-2xl font-bold mb-4'>Taal Volcano, Batangas</h2>
          <p className='text-justify leading-relaxed text-gray-700'>
            Taal Volcano is a large caldera in Batangas, Philippines. It was formed by prehistoric eruptions and was eventually filled by Taal Lake. The volcano is recognized as the smallest active volcano in the world. It is distinctive because of the fact that the volcano itself forms a landmass that has a lake inside its crater, and known as the "Crater Lake". Throughout history, it has erupted about 38 times, making it the second most active volcano in the Philippines.
          </p>
        </div>
        
        {/* Images Section */}
        <div className='flex justify-center gap-4 w-full max-w-4xl'>
          <img 
            src="../assets/4.jpg" 
            alt="Taal Volcano view 1" 
            className='w-1/2 h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' 
          />
          <img 
            src="../assets/5.jpg" 
            alt="Taal Volcano view 2" 
            className='w-1/2 h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' 
          />
        </div>
      </div>
    </div>
  )
}

export default Destination
