import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiX } from "react-icons/fi";




function Bags() {

  const [visibleCards, setVisibleCards] = useState(8);
  const [expandedCards, setExpandedCards] = useState({});
  const [filterText, setFilterText] = useState("");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cards = [
    { id: 1, title: "Antique Buddha Statue", description: "Brass Buddha statue", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 2499 },
    { id: 2, title: "Crystal Water Fountain", description: "Tabletop LED fountain", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 1899 },
    { id: 3, title: "Wooden Wall Clock", description: "Teak wood clock", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 3299 },
    { id: 4, title: "Mandala Wall Art", description: "Metallic mandala on canvas", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 1699 },
    { id: 5, title: "Ceramic Incense Holder", description: "Handcrafted incense holder", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 899 },
    { id: 6, title: "Bamboo Wind Chimes", description: "Melodious bamboo chimes", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 1299 },
  ];

  const filteredCards = cards.filter((card) => {
    const matchesTitle = card.title.toLowerCase().includes(filterText.toLowerCase());
    const matchesPrice = card.price >= priceRange[0] && card.price <= priceRange[1];
    return matchesTitle && matchesPrice;
  });

  const toggleDescription = (cardId) => {
    setExpandedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const loadMore = () => {
    setVisibleCards((prev) => Math.min(prev + 8, filteredCards.length));
  };

  const handlePriceChange = (range) => {
    if (range === "all") setPriceRange([0, Infinity]);
    else if (range === "under1000") setPriceRange([0, 1000]);
    else if (range === "1000to3000") setPriceRange([1000, 3000]);
    else if (range === "above3000") setPriceRange([3000, Infinity]);
  };
  return (
    <div className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Top Bar */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          All Products ({filteredCards.length})
        </h2>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold"
        >
          <FiFilter size={20} /> Filter
        </button>
      </div>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 border-r"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Filters</h3>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-medium text-sm mb-1">Search</label>
                <input
                  type="text"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="Search product..."
                  className="w-full border px-3 py-2 text-sm rounded"
                />
              </div>

              <div>
                <label className="block font-medium text-sm mb-1">Price</label>
                <select
                  onChange={(e) => handlePriceChange(e.target.value)}
                  className="w-full border px-3 py-2 text-sm rounded"
                >
                  <option value="all">All Prices</option>
                  <option value="under1000">Under ₹1000</option>
                  <option value="1000to3000">₹1000 - ₹3000</option>
                  <option value="above3000">Above ₹3000</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
        />
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        <AnimatePresence>
          {filteredCards.slice(0, visibleCards).map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className={`text-gray-600 text-sm ${!expandedCards[card.id] ? "line-clamp-2" : ""}`}>
                  {card.description}
                </p>
                <button
                  onClick={() => toggleDescription(card.id)}
                  className="text-orange-600 text-xs mt-1 hover:text-orange-800"
                >
                  {expandedCards[card.id] ? "Show Less" : "Read More"}
                </button>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-3">
                <p className="text-base font-bold text-gray-800">₹{card.price}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCards < filteredCards.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={loadMore}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Load More
          </button>
        </motion.div>
      )}
    </div>
  </div>
  )
}

export default Bags
