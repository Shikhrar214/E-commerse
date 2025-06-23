import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const weeklyProducts = [
  {
    id: 1,
    title: "Antique Buddha Statue",
    description: "Hand-carved brass Buddha statue with detailed posture for serenity.",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: 2499,
    material: "Brass",
    origin: "India",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Crystal Water Fountain",
    description: "LED-lit indoor water fountain to bring harmony and sound.",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: 1899,
    material: "Crystal & Resin",
    origin: "India",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Wooden Wall Clock",
    description: "Vintage handcrafted pendulum clock made with premium teak wood.",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: 3299,
    material: "Teak Wood",
    origin: "India",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Mandala Wall Art",
    description: "Vibrant hand-painted mandala for a peaceful vibe in any room.",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: 1699,
    material: "Canvas & Paint",
    origin: "India",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Bamboo Wind Chimes",
    description: "Natural bamboo wind chimes with soothing musical tones.",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: 1299,
    material: "Bamboo",
    origin: "India",
    rating: 4.4,
  },
];

const WeeklySpecials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % weeklyProducts.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? weeklyProducts.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  const imageVariants = {
    initial: (dir) => ({
      x: dir === 1 ? -100 : 100,
      opacity: 0,
    }),
    animate:( {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    }),
    exit: (dir) => ({
      x: dir === 1 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const textVariants = {
    initial: (dir) => ({
      x: dir === 1 ? 100 : -100,
      opacity: 0,
    }),
    animate:( {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    }),
    exit: (dir) => ({
      x: dir === 1 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const product = weeklyProducts[currentIndex];

  return (
    <div className="max-w-8xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-14">
        🔥 This Week's Special
      </h2>

      <div {...handlers} onClick={nextSlide} className="cursor-pointer select-none">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-2xl transition-all">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-80 overflow-hidden rounded-xl group">
            <AnimatePresence custom={direction} >
              <motion.img
                key={product.image || "placeholder"}
                src={
                  product.image ||
                  "https://via.placeholder.com/500x400?text=Image+Not+Available"
                }
                alt={product.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
              />
            </AnimatePresence>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={product.id}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
              >
                <h3 className="text-3xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <p className="text-sm text-gray-500">Material: {product.material}</p>
                <p className="text-sm text-gray-500">Origin: {product.origin}</p>
                <p className="text-sm text-yellow-500 font-semibold">
                  ⭐ {product.rating} / 5
                </p>
                <p className="text-2xl font-bold text-orange-600 mt-3">
                  ₹{product.price}
                </p>

                <button className="relative px-6 py-2 mt-5 font-semibold text-black overflow-hidden border-2 bg-white rounded-md group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                  <span className="relative z-10  group-hover:text-white">
                    Shop now
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySpecials;
