import React from 'react'
import { Link } from 'react-router-dom';

function nav() {

    function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("hidden");
    }

  return (
    <div className="bg-gray-100">
 
<div className="hidden md:flex justify-between items-center bg-gray-100 px-4 py-2 text-sm text-gray-600">
    <div className="flex space-x-4">
        <span>English</span>
        <span>Rwf</span>
    </div>
    <div className="flex space-x-4">
        <Link to="/Package" className="hover:text-gray-800">Tracking Package</Link>
        <Link to="/Faq" className="hover:text-gray-800">FAQ</Link>
        <Link to="/About-us" className="hover:text-gray-800">About Us</Link>
        <Link to="/contact-us" className="hover:text-gray-800">Contact Us</Link>
    </div>
</div>
 
<div className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200">
    
    <h1 className="text-2xl font-bold">Matelas Dodoma</h1>

    
    <div className="hidden md:flex items-center space-x-6 text-gray-700">
        
        <div className="relative">
            <input type="text" placeholder="Search here" className="w-64 pl-4 pr-10 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"/>
            <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 2a8 8 0 015.29 13.71l4 4a1 1 0 01-1.42 1.42l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
            </svg>
        </div>
        
        <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 hover:text-gray-900">
                <span>All Category</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </button>
            <Link to="#" className="hover:text-gray-900">Gift Cards</Link>
            <Link to="#" className="hover:text-gray-900">Special Event</Link>
        </div> 
        <div className="flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-900">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.992 6.992 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </Link>
            <Link to="#" className="hover:text-gray-900">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20v-1c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v1H4z"/>
                </svg>
            </Link>
            <Link to="#" className="hover:text-gray-900">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4h10l1 6H6l1-6zm-1 8h12v10H6V12zm9-6h-2V5H9v1H7v2h10V6z"/>
                </svg>
            </Link>
        </div>
    </div>
 
    <button className="md:hidden" onClick={toggleMenu}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
    </button>
</div>
 
<div id="mobileMenu" className="md:hidden hidden bg-white border-t border-gray-200">
    <div className="flex flex-col p-4 space-y-4 text-gray-700">
        <input type="text" placeholder="Search here" className="w-full pl-4 pr-10 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"/>
        <Link to="#" className="hover:text-gray-900">All Category</Link>
        <Link to="#" className="hover:text-gray-900">Gift Cards</Link>
        <Link to="#" className="hover:text-gray-900">Special Event</Link>
        <Link to="#" className="hover:text-gray-900">Tracking Package</Link>
        <Link to="#" className="hover:text-gray-900">FAQ</Link>
        <Link to="#" className="hover:text-gray-900">About Us</Link>
        <Link to="#" className="hover:text-gray-900">Contact Us</Link>
    </div>
</div>

</div>
  )
}

export default nav