import React, { useState } from 'react';

const ProductSidebar = () => {
  // Optional: You can control filters via state for reset functionality
  const [resetKey, setResetKey] = useState(0); // Forces re-render

  const handleReset = () => {
    setResetKey(prev => prev + 1); // Reset all filters by re-rendering
  };

  return (
    <div key={resetKey} className="w-full md:w-64  p-5 border-r border-gray-200 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Refine By</h2>
        <button
          onClick={handleReset}
          className="text-sm text-blue-700 hover:underline"
        >
          {/* Reset */}
        </button>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-2">Category</h3>
        {['Sneakers & Sports Shoes (607)', 'T-Shirts (232)', 'Shorts & Skirts (36)', 'Flip Flop & Slippers (75)', 'Track Pants (309)'].map((item, i) => (
          <label key={i} className="block text-sm text-gray-700 mb-1">
            <input type="checkbox" className="mr-2" />
            {item}
          </label>
        ))}
        <button className="text-xs text-blue-700 mt-1">More</button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-2">Price Range</h3>
        {['Below ₹500 (17)', '₹500–1000 (568)', '₹1000–1500 (243)', '₹1500–2000 (282)', '₹2000–2500 (50)'].map((range, i) => (
          <label key={i} className="block text-sm text-gray-700 mb-1">
            <input type="checkbox" className="mr-2" />
            {range}
          </label>
        ))}
        <div className="flex gap-2 mt-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 border text-sm px-2 py-1 rounded"
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 border text-sm px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-2">Brand</h3>
        {['SUTIE', 'COPPER', 'BANDQIT', 'ALFINE', 'CERE', 'DONNA RICCO'].map((brand, i) => (
          <label key={i} className="block text-sm text-gray-700 mb-1">
            <input type="checkbox" className="mr-2" />
            {brand}
          </label>
        ))}
        <button className="text-xs text-blue-700 mt-1">More</button>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-2">Color</h3>
        <div className="flex flex-wrap gap-2">
          {['#7b2cbf', '#1e3a8a', '#16a34a', '#ca8a04', '#e11d48', '#000000', '#cccccc'].map((color, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      {/* Size & Fit */}
      <div>
        <h3 className="font-bold text-sm mb-2">Size & Fit</h3>
        {['XS (68)', 'S (268)', 'M (1057)', 'L (623)', '2XL'].map((size, i) => (
          <label key={i} className="block text-sm text-gray-700 mb-1">
            <input type="checkbox" className="mr-2" />
            {size}
          </label>
        ))}
        <button className="text-xs text-blue-700 mt-1">More</button>
      </div>
    </div>
  );
};

export default ProductSidebar;
