import React from "react";
import {
  FaHandsHelping,
  FaExchangeAlt,
  FaShieldAlt,
  FaShoppingCart,
} from "react-icons/fa";


const features = [
  { icon: <FaHandsHelping size={24} />, text: "Support Independent Brands" },
  { icon: <FaExchangeAlt size={24} />, text: "Free Returns and Exchanges" },
  { icon: <FaShieldAlt size={24} />, text: "Support Independent Brands" },
  { icon: <FaShoppingCart size={24} />, text: "Support Independent Brands" },
];

function SupportBar() {
  return (
    <div className="flex flex-wrap justify-center bg-[#843C0C] text-white rounded-full overflow-hidden md:flex-nowrap">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex w-full flex-col items-center justify-center gap-2 p-4 text-center md:w-1/4 ${
            index === 0 ? "rounded-l-full" : ""
          } ${index === features.length - 1 ? "rounded-r-full" : ""}`}
        >
          {feature.icon}
          <p className="text-sm">{feature.text}</p>
        </div>
      ))}
    </div>
  )
}

export default SupportBar




