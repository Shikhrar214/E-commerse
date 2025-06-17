import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
 { title: "Water Fountains", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Buddha Idols", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Pendulum Clocks", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Wall Hangings", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Buddha Paintings", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Handicraft Items", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Handicraft Items", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Water Fountains", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Buddha Idols", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Pendulum Clocks", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Wall Hangings", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Buddha Paintings", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },
  { title: "Handicraft Items", img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg" },

];



function RoundedItemCategory() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = [...categories.slice(startIndex), ...categories.slice(0, startIndex)]
    .slice(0, isMobile ? 3 : 5);

  return (
    <div className="bg-gradient-to-r from-[#6e8572] to-[#a3b9a9] py-6 sm:py-8 md:py-10">
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 font-sans tracking-wide px-4">
        Explore Our Craft Categories
      </h2>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 overflow-visible">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${startIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="relative group">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden 
                                  border-2 sm:border-4 border-white shadow-lg 
                                  group-hover:shadow-xl group-hover:scale-105 
                                  transition-all duration-300">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transform 
                                 group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-3 
                               text-center w-16 sm:w-20 md:w-24 lg:w-28 font-medium 
                               truncate">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoundedItemCategory;