import React from "react";
import {
  FaHandsHelping,
  FaExchangeAlt,
  FaShieldAlt,
  FaShoppingCart,
} from "react-icons/fa";

const features = [
  { 
    icon: <FaHandsHelping size={20} className="md:text-2xl" />, 
    text: "Support Independent Brands" 
  },
  { 
    icon: <FaExchangeAlt size={20} className="md:text-2xl" />, 
    text: "Free Returns and Exchanges" 
  },
  { 
    icon: <FaShieldAlt size={20} className="md:text-2xl" />, 
    text: "Secure Payments" 
  },
  { 
    icon: <FaShoppingCart size={20} className="md:text-2xl" />, 
    text: "Fast Delivery" 
  },
];

function SupportBar() {
  return (
    <div className="px-4 py-2 md:py-4">
      <div className="flex flex-col md:flex-row justify-center bg-[#843C0C] text-white rounded-2xl md:rounded-full overflow-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center md:flex-col justify-start md:justify-center 
                       gap-3 md:gap-2 p-3 md:p-4 text-left md:text-center 
                       border-b md:border-b-0 md:border-r border-white/10
                       last:border-b-2 md:last:border-r-0 md:w-1/4
                       hover:bg-[#9c4610] transition-colors duration-200`}
          >
            <span className="w-8 md:w-auto flex justify-center">{feature.icon}</span>
            <p className="text-xs md:text-sm font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportBar;