import React from 'react'
import Image1 from "../assets/10.jpg"
import Image2 from "../assets/11.jpg"
import Image3 from "../assets/9.jpg"

function Trip() {
  const trips = [
    {
      id: 1,
      image: Image1,
      title: "Green Escape by the Lake",
      description: "Nestled in a serene valley, this hidden green paradise feels like nature's warm embrace. Tall trees sway gently in the breeze, their reflections shimmering on the calm, crystal-clear lake.",
      duration: "3 Days",
      price: "$299",
      rating: 4.8,
      category: "Nature"
    },
    {
      id: 2,
      image: Image2,
      title: "Boats and Colorful Houses",
      description: "This charming waterfront town looks like a painting brought to life. Vibrant houses line the shore, their colors dancing in the sunlight and reflecting beautifully on the gentle waves.",
      duration: "5 Days",
      price: "$459",
      rating: 4.9,
      category: "Cultural"
    },
    {
      id: 3,
      image: Image3,
      title: "Rocky Mountain Adventure",
      description: "Rising dramatically against the sky, the rocky mountains call to every adventurer's heart. Jagged peaks and rugged cliffs create an awe-inspiring landscape where each trail promises both challenge and reward.",
      duration: "7 Days",
      price: "$699",
      rating: 4.7,
      category: "Adventure"
    }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md'>
            ✈️ Latest Adventures
          </div>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6'>
            Recent Trips
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Check out our latest adventures and travel experiences. Explore the world with us and create unforgettable memories that will last a lifetime.
          </p>
        </div>

        {/* Trips Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {trips.map((trip) => (
            <div key={trip.id} className='group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2'>
              {/* Image Section */}
              <div className='relative overflow-hidden'>
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className='w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110' 
                />
                {/* Category Badge */}
                <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium'>
                  {trip.category}
                </div>
                {/* Price Badge */}
                <div className='absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg'>
                  {trip.price}
                </div>
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Content Section */}
              <div className='p-6'>
                {/* Rating and Duration */}
                <div className='flex justify-between items-center mb-3'>
                  <div className='flex items-center gap-1'>
                    <span className='text-yellow-400'>★</span>
                    <span className='text-sm font-medium text-gray-600'>{trip.rating}</span>
                  </div>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                    </svg>
                    <span className='text-sm'>{trip.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                  {trip.title}
                </h2>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed mb-6 line-clamp-3'>
                  {trip.description}
                </p>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <button className='flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                    Book Now
                  </button>
                  <button className='px-4 py-3 border-2 border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 rounded-xl transition-all duration-300 hover:bg-blue-50'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center mt-12'>
          <button className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
            View All Trips →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trip