import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Water Fountains",
  "Buddha Idols",
  "Pendulum Clocks",
  "Wall Hangings",
  "Buddha Paintings",
  "Handicraft Items",
  "Handicraft Items",
  "Water Fountains",
  "Buddha Idols",
  "Pendulum Clocks",
  "Wall Hangings",
  "Buddha Paintings",
  "Handicraft Items",
].map((title) => ({
  title,
  img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg",
}));

const RoundedItemCategory = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = [
    ...categories.slice(startIndex),
    ...categories.slice(0, startIndex),
  ].slice(0, isMobile ? 3 : 5);

  return (
    <section className="bg-gradient-to-r from-[#6e8572] to-[#a3b9a9] py-10">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide font-sans">
        Explore Our Craft Categories
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8 overflow-visible">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${startIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-white text-sm sm:text-base mt-3 font-medium truncate w-24 sm:w-28">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundedItemCategory;
