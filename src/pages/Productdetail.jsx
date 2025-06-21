import { recordStats } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaTruck, FaUndo } from "react-icons/fa";
import { productdetails } from "../data/dummydata"; 

const ProductPage = () => {
  const { id } = useParams(); // get ID from route
  const product = productdetails.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className="p-8">Product not found</p>;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md" />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-2">
            {[...Array(Math.round(product.rating))].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mr-1" />
            ))}
            <span className="text-sm text-gray-500 ml-2">({product.rating} ratings)</span>
          </div>
          <p className="text-2xl font-semibold text-orange-600 mb-2">{product.price}</p>
          <p className="text-green-600 font-medium mb-4">{product.offers}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex border rounded overflow-hidden">
              <button onClick={() => handleQuantityChange("dec")} className="px-3 py-1 bg-gray-200">-</button>
              <div className="px-4 py-1 border-x text-center">{quantity}</div>
              <button onClick={() => handleQuantityChange("inc")} className="px-3 py-1 bg-gray-200">+</button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mb-4">
            <p className="text-gray-700">
              Estimated Delivery: <span className="font-medium">Monday, June 24</span>
            </p>
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <FaTruck className="mr-2" /> {product.shipping}
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <FaUndo className="mr-2" /> {product.returnPolicy}
            </div>
          </div>

          {/* Buy Button */}
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">Buy Now</button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="space-y-10 mt-12">
        <div>
          <h2 className="text-xl font-semibold mb-2">What's in the Box</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {product.boxContents.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
          <p className="text-gray-700 text-sm">Height: 12 inches | Material: Brass | Weight: 2kg | Made in India</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
