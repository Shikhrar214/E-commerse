import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const categories = [
  "Water Fountains",
  "Buddha Idols",
  "Pendulum Clocks",
  "Wall Hangings",
  "Buddha Paintings",
  "Handicraft Items",
  "Metal Crafts",
  "Spiritual Decor",
  "Wooden Sculptures",
  "Festive Gifts",
  "Tribal Art",
].map((title) => ({
  title,
  img: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg",
}));

const ITEM_WIDTH = 180;

const RoundedItemCategory = () => {
  const containerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const controls = useAnimation();

  const extendedCategories = [...categories, ...categories];

  useEffect(() => {
    if (!isAutoPlaying) return;
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [isAutoPlaying, controls]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: ITEM_WIDTH, behavior: "smooth" });
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 4000);
      }
    },
    onSwipedRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -ITEM_WIDTH, behavior: "smooth" });
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 4000);
      }
    },
    trackMouse: true,
  });

  return (
    <section className="bg-gradient-to-r from-[#6e8572] to-[#a3b9a9] py-12 overflow-hidden relative">
      <div className="relative z-10">
        <motion.h2 
          className="text-white text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Craft Categories
        </motion.h2>

        <div className="relative max-w-7xl mx-auto px-6">
          <div 
            className="overflow-x-auto scroll-smooth mx-12 scrollbar-hide"
            ref={containerRef}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            {...handlers}
          >
            <motion.div
              className="flex gap-8 w-max"
              animate={controls} 
              style={{ x: 0 }}
            >
              {extendedCategories.map((item, idx) => (
                <motion.div
                  key={`${item.title}-${idx}`}
                  className="flex flex-col items-center text-center cursor-pointer group"
                  style={{ minWidth: ITEM_WIDTH }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/80 shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <motion.p 
                    className="text-white text-sm md:text-base mt-4 font-semibold drop-shadow-md px-2 group-hover:text-emerald-100 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.title}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundedItemCategory;
