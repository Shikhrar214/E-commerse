import React from 'react'
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";




function Header() {
  return (
    <header className="w-full">
    {/* Top Notice Bar */}
    <div className="bg-gray-800 text-white text-sm py-1 text-center flex justify-center items-center gap-2">
      <span className="text-lg">←</span>
      <span>Free Home Shipping above 5000</span>
      <span className="text-lg">→</span>
    </div>

    {/* Main Header */}
    <div className="bg-[#8b2f0b] px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left: Search Bar */}
      <div className="flex items-center w-full sm:w-1/3">
        <FaSearch className="text-white mr-2" />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full bg-transparent border-b border-white placeholder-white text-white focus:outline-none"
        />
      </div>

      {/* Center: Logo */}
      <div className="text-white text-2xl font-semibold tracking-wide text-center w-full sm:w-1/3">
        AchiChiz
      </div>

      {/* Right: Country & Icons */}
      <div className="flex items-center justify-end w-full sm:w-1/3 text-white gap-4">
        <select className="bg-transparent text-white text-sm outline-none">
          <option>India (INR ₹)</option>
          {/* Add more options as needed */}
        </select>
        <FaUser />
        <FaHeart />
        <div className="relative">
          <FaShoppingCart />
          <span className="absolute -top-2 -right-2 text-xs bg-gray-800 text-white rounded-full w-4 h-4 flex items-center justify-center">0</span>
        </div>
      </div>
    </div>

    {/* Navigation Bar */}
    <nav className="bg-[#8b2f0b] text-white text-sm py-2 px-4 sm:px-8 flex flex-wrap justify-center gap-6">
      <a href="#">BAGS</a>
      <a href="#">BASKETS</a>
      <a href="#">HOME DECOR</a>
      <a href="#">KITCHEN & DINING</a>
      <a href="#">BEST SELLER</a>
      <a href="#">ACCESSORIES</a>
      <a href="#">ABOUT US</a>
    </nav>
  </header>
  )
}

export default Header

