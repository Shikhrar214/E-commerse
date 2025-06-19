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
  
     <div className="w-full h-[300px] sm:h-[450px] relative overflow-hidden " >
      <AnimatePresence mode="wait">
        <motion.img
          key={banners[index]}
          src={banners[index]}
          alt={`Banner ${index + 1}`}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
    
  )
}

export default BannerSection
