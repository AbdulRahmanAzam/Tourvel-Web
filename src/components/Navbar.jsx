import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {SiGnuprivacyguard} from "react-icons/si";
import { NavigationData } from '../data/NavigationData.js'
import {IoReorderThreeOutline} from "react-icons/io5"
import {IoClose} from "react-icons/io5"


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between bg-white/50  backdrop-blur-md border border-white/20 my-2 items-center p-[30px] w-[95%] h-[80px] shadow-xl rounded-2xl relative'>
        <h1 className='flex text-3xl font-bold'>
          <span className='text-blue-400'>Tour</span>
          <span className="text-cyan-400">vel</span>
        </h1>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex justify-center items-center gap-3 text-[16px] font-semibold'>
            <ul className='flex justify-center items-center gap-3'>
                {
                    NavigationData.map(item => {
                        const ItemComponent = item.icon;
                        return (
                        <li key={item.id} className='hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 p-[10px] rounded-lg'>
                            <Link to={item.path} className='flex items-center gap-1'> 
                              <ItemComponent /> {item.label}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
            
            {/* Signup Button for Desktop */}
            <Link 
                to="/" 
                className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-1 shadow-md hover:shadow-lg transform hover:scale-105'
            >
                <SiGnuprivacyguard /> Signup
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='md:hidden hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 p-2 rounded-lg text-3xl'
        >
          {isMenuOpen ? <IoClose /> : <IoReorderThreeOutline />}
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`absolute top-full left-0 w-full bg-white/90 backdrop-blur-3xl border border-white shadow-lg rounded-lg mt-2 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen 
                ? 'max-h-96 opacity-100 transform translate-y-0' 
                : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
            <ul className='py-4'>
                {
                    NavigationData.map(item => {
                        const ItemComponent = item.icon;
                        return (
                        <li key={item.id} className='flex justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 mx-4 my-2 rounded-lg'>
                            <Link 
                            to={item.path} 
                            className='flex items-center gap-2 p-3 text-lg font-semibold'
                            onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
                            > 
                            <ItemComponent /> {item.label}
                            </Link>
                        </li>
                        )
                    })
                }

                {/* Signup Button for Mobile */}
                <li className='mx-4 my-2'>
                    <Link 
                        to="/signup" 
                        className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg justify-center transform hover:scale-105'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <SiGnuprivacyguard /> Signup
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar