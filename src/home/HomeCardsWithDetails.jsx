import React,{useState} from 'react'
import { motion } from 'framer-motion'

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
    title: "Bamboo Wind Chimes",
    description: "Natural bamboo wind chimes with melodious sound for peaceful ambiance",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    price: "₹1,299"
  },
];



function HomeTopCards() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleDescription = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

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
                <div className="relative">
                  <p className={`text-gray-600 ${!expandedCards[card.id] ? 'line-clamp-2' : ''}`}>
                    {card.description}
                  </p>
                  <button
                    onClick={() => toggleDescription(card.id)}
                    className="text-orange-600 text-sm mt-1 hover:text-orange-800 focus:outline-none"
                  >
                    {expandedCards[card.id] ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center bg-gray-100 p-4 rounded-b-xl'>
                {card.price && (
                  <p className="text-lg font-bold text-gray-800 p-4">
                    {card.price}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeTopCards


