import React from 'react';
import { FaThLarge, FaBars } from 'react-icons/fa';

const ProductTopBar = ({ totalItems = 51732 }) => {
  return (
    <div className=" py-4 px-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-200">
      {/* Total Items */}
      <div className="text-sm font-semibold text-gray-800 mb-2 md:mb-0">
        {totalItems.toLocaleString()} ITEMS FOUND
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* View Icons */}
        <div className="flex gap-2 text-gray-400">
          <button className="hover:text-black">
            <FaBars />
          </button>
          <button className="text-[#0a2240] font-bold">
            <FaThLarge />
          </button>
        </div>

        {/* Sort Dropdown */}
        <select
          className="border border-gray-300 rounded-sm px-4 py-1 text-sm text-gray-800"
          defaultValue="highToLow"
        >
          <option value="lowToHigh">PRICE (LOW TO HIGH)</option>
          <option value="highToLow">PRICE (HIGH TO LOW)</option>
          <option value="newest">NEWEST FIRST</option>
        </select>
      </div>
    </div>
  );
};

export default ProductTopBar;
