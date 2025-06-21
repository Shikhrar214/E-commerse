import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { id: 1, title: "Card 1", description: "Description for card 1", image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg" },
  { id: 2, title: "Card 2", description: "Description for card 2", image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg" },
  { id: 3, title: "Card 3", description: "Description for card 3", image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg" },
  { id: 4, title: "Card 4", description: "Description for card 4", image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg" },
  { id: 5, title: "Card 5", description: "Description for card 5", image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg" },
  { id: 6, title: "Card 6", description: "Description for card 6", image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg" },
];

function HomeTopCards() {
  return (
      <div className="w-full h-fit py-15 overflow-hidden">
        <div className="flex overflow-x-auto no-scrollbar scroll-smooth px-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mx-3"
            >

              <div className="relative h-45 md:h-50 overflow-hidden group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default HomeTopCards