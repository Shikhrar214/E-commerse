import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  "https://images.pexels.com/photos/7718876/pexels-photo-7718876.jpeg",
  "https://images.pexels.com/photos/9478266/pexels-photo-9478266.jpeg",
  "https://images.pexels.com/photos/8036841/pexels-photo-8036841.jpeg",
];

function BannerSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" relative  w-full h-[450px] sm:h-[650px] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={banners[index]}
          src={banners[index]}
          alt={`Banner ${index + 1}`}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-125 group-hover:contrast-110"
        />
      </AnimatePresence>
      <div className="absolute bottom-50 right-50 text-black gap-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">  
          <p className="text-white text-lg mb-2">Explore More Items</p>
    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-black">
      View More
    </button>
  </div>

      {/* Side blur overlays (thicker) */}
<div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/70 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/70 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Top and bottom blur overlays */}
      <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
    </div>
  );
}

export default BannerSection;
