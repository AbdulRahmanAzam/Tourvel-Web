import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 text-white'>
        {/* Upper Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center p-4 md:p-8 lg:p-10 gap-6 lg:gap-0'>
            {/* Brand Section */}
            <div className='text-center lg:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                  <span className='text-blue-400'>Tour</span>
                  <span className="text-cyan-400">vel</span>
                </h1>
                <p className='text-sm md:text-base text-gray-300'>Choose your favorite travel destination</p>
            </div>
            
            {/* Social Links Section */}
            <div className=''>
                <h3 className='text-lg font-semibold mb-3 text-center lg:text-left'>Follow Us</h3>
                <ul className='flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 text-gray-300'>
                    <li>
                        <a href="https://www.facebook.com" className='flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base'>
                            <FaFacebook className='text-lg md:text-xl'/>
                            <span className='hidden sm:inline'>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base'>
                            <FaTwitter className='text-lg md:text-xl'/>
                            <span className='hidden sm:inline'>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" className='flex items-center gap-2 hover:text-pink-400 transition-colors duration-300 text-sm md:text-base'>
                            <FaInstagram className='text-lg md:text-xl'/>
                            <span className='hidden sm:inline'>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 text-sm md:text-base'>
                            <FaLinkedin className='text-lg md:text-xl'/>
                            <span className='hidden sm:inline'>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent'></div>

        {/* Bottom Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-4 md:p-8 lg:p-10 text-gray-400 text-sm md:text-base'>
            {/* Project Column */}
            <div>
                <h3 className='text-white font-semibold mb-3 md:mb-4 text-base md:text-lg'>Project</h3>
                <ul className='space-y-2'>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Changelog</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Status</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>License</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>All Versions</a></li>
                </ul>
            </div>

            {/* Community Column */}
            <div>
                <h3 className='text-white font-semibold mb-3 md:mb-4 text-base md:text-lg'>Community</h3>
                <ul className='space-y-2'>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Github</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Issues</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Project</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Twitter</a></li>
                </ul>
            </div>

            {/* Help Column */}
            <div>
                <h3 className='text-white font-semibold mb-3 md:mb-4 text-base md:text-lg'>Help</h3>
                <ul className='space-y-2'>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Support</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Documentation</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>FAQ</a></li>
                </ul>
            </div>

            {/* Others Column */}
            <div>
                <h3 className='text-white font-semibold mb-3 md:mb-4 text-base md:text-lg'>Others</h3>
                <ul className='space-y-2'>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Terms of Service</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Privacy Policy</a></li>
                    <li><a href="#" className='hover:text-cyan-400 transition-colors duration-300'>Contact Us</a></li>
                </ul>
            </div>
        </div>

        {/* Copyright Section */}
        <div className='border-t border-gray-700 p-4 md:p-6 text-center'>
            <p className='text-gray-400 text-sm md:text-base'>
                © 2025 <span className='text-blue-400'>Tour</span><span className='text-cyan-400'>vel</span>. All rights reserved.
            </p>
        </div>
    </div>
  )
}


export default Footer