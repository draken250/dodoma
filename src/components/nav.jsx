import React from "react";
import { BsCart3 } from "react-icons/bs";
import { LuHeart, LuSearch, LuUser, LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function nav() {
  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }

  return (
    <div className="border-b border-gray-200">
      {/* small navbar */}
      <div className="hidden md:flex bg-gray-100 py-2 text-sm text-gray-500">
        <div className="flex justify-between items-center w-full px-6 max-w-[1500px] mx-auto">
          <div className="flex space-x-4">
            <span className="cursor-pointer">English</span>
            <span className="cursor-pointer">Rwf</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/Package" className="hover:text-main-color">
              Tracking Package
            </Link>
            <Link to="/Faq" className="hover:text-main-color">
              FAQ
            </Link>
            <Link to="/About-us" className="hover:text-main-color">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-main-color">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* big navbar */}
      <div className="flex items-center justify-between bg-white px-6 py-4 w-full max-w-[1500px] mx-auto">
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-medium BrushScript flex items-start justify-start gap-2 text-red-600 cursor-pointer">
            Matelas Dodoma
            <span className="text-2xl">&reg;</span>
          </h1>
          <button className="flex items-center space-x-1 hover:text-gray-900">
            <span>All Category</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          <Link to="#" className="hover:text-gray-900">
            Gift Cards
          </Link>
          <Link to="#" className="hover:text-gray-900">
            Special Event
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <div className="flex items-center space-x-6">
            {/* search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="w-64 pl-4 pr-11 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-4 focus:ring-main-color/10 focus:border-main-color/15 transition"
              />
              <button className="absolute right-[6px] top-0 bottom-0 my-auto h-[32px] rounded-full flex items-center justify-center aspect-square bg-main-color text-white">
                <LuSearch className=" text-lg pb-[2px]" />
              </button>
            </div>
            <Link to="#" className="text-xl hover:text-main-color">
              <LuHeart />
            </Link>
            <Link to="#" className="text-xl hover:text-main-color">
              <BsCart3 />
            </Link>
            <Link to="#" className="text-xl hover:text-main-color">
              <LuUser2 />
            </Link>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* mobile nav */}
      <div
        id="mobileMenu"
        className="md:hidden hidden bg-white border-t border-gray-200"
      >
        <div className="flex flex-col p-4 space-y-4 text-gray-700">
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-4 pr-10 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <Link to="#" className="hover:text-gray-900">
            All Category
          </Link>
          <Link to="#" className="hover:text-gray-900">
            Gift Cards
          </Link>
          <Link to="#" className="hover:text-gray-900">
            Special Event
          </Link>
          <Link to="#" className="hover:text-gray-900">
            Tracking Package
          </Link>
          <Link to="#" className="hover:text-gray-900">
            FAQ
          </Link>
          <Link to="#" className="hover:text-gray-900">
            About Us
          </Link>
          <Link to="#" className="hover:text-gray-900">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default nav;
