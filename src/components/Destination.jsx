import React from 'react'

function Destination() {
  return (
    <div className='w-full flex flex-col justify-center items-center p-4 md:p-8 min-h-screen bg-gradient-to-br from-blue-50 to-white'>
      {/* Header Section */}
      <div className='text-center mb-8 md:mb-12'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
          Popular Destinations
        </h1>
        <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
          Explore the world's most beautiful destinations with us and create unforgettable memories.
        </p>
      </div>

      {/* Content Section */}
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-7xl'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 space-y-6'>
          <div className='bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left'>
              Taal Volcano, Batangas
            </h2>
            <p className='text-sm md:text-base leading-relaxed text-gray-700 text-justify'>
              Taal Volcano is a large caldera in Batangas, Philippines. It was formed by prehistoric eruptions and was eventually filled by Taal Lake. The volcano is recognized as the smallest active volcano in the world. It is distinctive because of the fact that the volcano itself forms a landmass that has a lake inside its crater, and known as the "Crater Lake". Throughout history, it has erupted about 38 times, making it the second most active volcano in the Philippines.
            </p>
            
            {/* Additional Info Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
              <div className='bg-blue-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-blue-800 mb-2'>Location</h3>
                <p className='text-sm text-blue-600'>Batangas, Philippines</p>
              </div>
              <div className='bg-green-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-green-800 mb-2'>Status</h3>
                <p className='text-sm text-green-600'>Active Volcano</p>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className='w-full lg:w-1/2 space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='relative group overflow-hidden rounded-2xl shadow-lg sm:mb-8'>
              <img 
                src="../assets/4.jpg" 
                alt="Taal Volcano view 1" 
                className='w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='font-semibold'>Crater Lake View</p>
                </div>
              </div>
            </div>
            
            <div className='relative group overflow-hidden rounded-2xl shadow-lg sm:mt-8'>
              <img 
                src="../assets/5.jpg" 
                alt="Taal Volcano view 2" 
                className='w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='font-semibold'>Volcanic Landscape</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className='text-center mt-6'>
            <button className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              Explore This Destination
            </button>
          </div>
        </div>
      </div>




      {/* Content Section ---------- 2*/}
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-7xl mt-10'>

        {/* Images Section */}
        <div className='w-full lg:w-1/2 space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='relative group overflow-hidden rounded-2xl shadow-lg bg-black sm:mb-8'>
              <img 
                src="../assets/6.jpg" 
                alt="Mt. Daguldul view 1" 
                className='w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='font-semibold'>Desert Village</p>
                </div>
              </div>
            </div>
            
            <div className='relative group overflow-hidden rounded-2xl shadow-lg sm:mt-8'>
              <img 
                src="../assets/8.jpg" 
                alt="Mt. Daguldul view 2" 
                className='w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='font-semibold'>Seaview Lake</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className='text-center mt-6'>
            <button className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              Explore This Destination
            </button>
          </div>
        </div>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 space-y-6'>
          <div className='bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left'>
              Mt Taguldul, Batangas
            </h2>
            <p className='text-sm md:text-base leading-relaxed text-gray-700 text-justify'>
              A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name 'Daguldul' or 'Daguldol' has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes. Actually a small mountain range, Mt. Daguldul has several 'gems' to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total. Of course there is the peak, which, although not really spectacular in terms of views, has a refreshing feel.
            </p>
            
            {/* Additional Info Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
              <div className='bg-blue-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-blue-800 mb-2'>Location</h3>
                <p className='text-sm text-blue-600'>Batangas, Philippines</p>
              </div>
              <div className='bg-green-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-green-800 mb-2'>Status</h3>
                <p className='text-sm text-green-600'>Active Seaview </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Destination