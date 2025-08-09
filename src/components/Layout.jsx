import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50 relative'>
      {/* Fixed/Sticky Navbar */}
      <div className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-4'>
        <Navbar />
      </div>
      
      {/* Main Content */}
      <main className='w-full'>
        {children}
      </main>
    </div>
  )
}

export default Layout
