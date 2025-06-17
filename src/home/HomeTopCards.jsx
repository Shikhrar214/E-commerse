import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "Description for card 1",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg"
  },
  {
    id: 2,
    title: "Card 1",
    description: "Description for card 1",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg"
  },
  {
    id: 3,
    title: "Card 1",
    description: "Description for card 1",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg"
  },
  {
    id: 4,
    title: "Card 1",
    description: "Description for card 1",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg"
  },
  {
    id: 5,
    title: "Card 1",
    description: "Description for card 1",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg"
  },
  {
    id: 6,
    title: "Card 1",
    description: "Description for card 1",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg"
  },
];


function HomeTopCards() {
  return (
    <div className="w-full py-8">
      <div className="max-w-[100vw] overflow-hidden px-4">
        <div className="flex overflow-x-auto gap-4 md:gap-6 no-scrollbar">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-shrink-0 w-[250px] md:w-[300px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 md:h-48">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeTopCards