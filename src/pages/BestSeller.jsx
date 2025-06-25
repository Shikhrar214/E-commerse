import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";


import { AllProductPage } from "../index";

function BestSeller() {

  const bestSellerProducts  = [
    {
      "id": 1,
      "name": "Handcrafted Buddha Idol",
      "category": "Home Decor",
      "description": "A serene handcrafted Buddha statue made with eco-friendly clay, perfect for meditation corners.",
      "price": 1199,
      "image": "https://images.pexels.com/photos/279614/pexels-photo-279614.jpeg",
      "rating": 4.8,
      "stock": 12,
      "tags": ["buddha", "statue", "spiritual", "handmade"]
    },
    {
      "id": 2,
      "name": "Jute Storage Basket",
      "category": "Basket",
      "description": "Multipurpose handwoven jute basket ideal for organizing laundry, toys, or household items.",
      "price": 499,
      "image": "https://images.pexels.com/photos/1546896/pexels-photo-1546896.jpeg",
      "rating": 4.3,
      "stock": 28,
      "tags": ["jute", "basket", "storage", "eco-friendly"]
    },
    {
      "id": 3,
      "name": "Leather Sling Bag",
      "category": "Bags",
      "description": "Trendy and durable leather sling bag suitable for both casual and office use.",
      "price": 1499,
      "image": "https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg",
      "rating": 4.6,
      "stock": 7,
      "tags": ["bag", "leather", "fashion", "sling"]
    },
    {
      "id": 4,
      "name": "Ceramic Mug Set",
      "category": "Kitchen",
      "description": "Set of 4 hand-painted ceramic mugs to brighten up your morning tea or coffee.",
      "price": 799,
      "image": "https://images.pexels.com/photos/162743/mugs-coffee-drink-caffeine-162743.jpeg",
      "rating": 4.5,
      "stock": 20,
      "tags": ["mug", "ceramic", "kitchen", "handmade"]
    },
    {
      "id": 5,
      "name": "Macrame Wall Hanging",
      "category": "Home Decor",
      "description": "Boho-style macrame wall hanging made with natural cotton ropes to elevate your room aesthetics.",
      "price": 899,
      "image": "https://images.pexels.com/photos/6566917/pexels-photo-6566917.jpeg",
      "rating": 4.7,
      "stock": 15,
      "tags": ["macrame", "decor", "boho", "handwoven"]
    },
    {
      "id": 6,
      "name": "Woven Picnic Basket",
      "category": "Basket",
      "description": "Chic and sturdy basket ideal for picnics, groceries, or farmhouse-style decor.",
      "price": 999,
      "image": "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg",
      "rating": 4.4,
      "stock": 10,
      "tags": ["basket", "woven", "picnic", "outdoor"]
    },
    {
      "id": 7,
      "name": "Canvas Tote Bag",
      "category": "Bags",
      "description": "Spacious and eco-friendly tote bag made with premium canvas. Ideal for shopping and casual outings.",
      "price": 599,
      "image": "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg",
      "rating": 4.2,
      "stock": 35,
      "tags": ["tote", "bag", "canvas", "eco-friendly"]
    },
    {
      "id": 8,
      "name": "Wooden Chopping Board",
      "category": "Kitchen",
      "description": "Premium teak wood chopping board suitable for cutting veggies, meat, and serving cheese.",
      "price": 649,
      "image": "https://images.pexels.com/photos/572190/pexels-photo-572190.jpeg",
      "rating": 4.6,
      "stock": 18,
      "tags": ["kitchen", "wood", "board", "cutting"]
    }
  ]
  

  return (
    <div>
      <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 min-h-screen">
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
          >
            Best Sellers <MdLocalOffer className="inline-block text-yellow-500 ml-2" />
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellerProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.stock < 10 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      Only {product.stock} left!
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
      </section>

      <section>
        <AllProductPage />
      </section>
    </div>
  );
}

export default BestSeller;




