import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const cards = [
  {
    id: 1,
    title: "Antique Buddha Statue",
    description: "Hand-carved brass Buddha statue with intricate detailing and meditation pose",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹2,499"
  },
  {
    id: 2,
    title: "Crystal Water Fountain",
    description: "Indoor tabletop fountain with LED lights and natural river stones",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹1,899"
  },
  {
    id: 3,
    title: "Wooden Wall Clock",
    description: "Traditional pendulum clock crafted from premium teak wood",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹3,299"
  },
  {
    id: 4,
    title: "Mandala Wall Art",
    description: "Hand-painted metallic mandala artwork on canvas, perfect for meditation spaces",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹1,699"
  },
  {
    id: 5,
    title: "Ceramic Incense Holder",
    description: "Handcrafted ceramic incense stick holder with ash catcher",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹899"
  },
  {
    id: 6,
    title: "Ceramic Incense Holder",
    description: "Handcrafted ceramic incense stick holder with ash catcher",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹899"
  },
  // Sixth card removed
];

function HomeTopCards() {
  return (
    <>
      {/* Header */}
      <div className='flex justify-between items-center mx-10 mb-6'>
        <div>
          <h3 className='text-2xl font-medium text-gray-800'>Top Picks</h3>
          <h1 className='text-4xl font-bold text-gray-800'>Handpicked for You</h1>
        </div>
        <NavLink to="/all-products">
          <button className="relative px-6 py-2 mt-5 font-semibold text-black overflow-hidden border-2 bg-white rounded-md group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                  <span className="relative z-10  group-hover:text-white">
                    Shop more
                  </span>
                </button>
        </NavLink>
      </div>

      {/* Cards Section */}
      <div className="w-full py-4 md:py-6"> {/* Reduced top/bottom space only */}
        <div className="max-w-[100vw] overflow-hidden px-4">
          <div className="flex overflow-x-auto gap-4 md:gap-6 no-scrollbar">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-[250px] md:w-[280px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image with live hover effect */}
                <div className="relative h-40 md:h-44 overflow-hidden group rounded-t-xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>

                {/* Price as button */}
                <div className='flex justify-center items-center p-4'>
                  <button className="relative px-6 py-2 mt-5 font-semibold text-black overflow-hidden border-2 bg-white rounded-md group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                  <span className="relative z-10  group-hover:text-white">
                {card.price}
                  </span>
                </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTopCards;
