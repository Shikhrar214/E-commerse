import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const Blog = [
    {
        title: "The Art of Craftsmanship",
        image: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg",
        content: "Explore the intricate world of traditional craftsmanship and its significance in modern society."
    },
    {
        title: "Sustainable Crafting Practices",
        image: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg",
        content: "Learn how sustainable materials and techniques are shaping the future of crafting."
    },
    {
        title: "DIY Home Decor Ideas",
        image: "https://images.pexels.com/photos/4272618/pexels-photo-4272618.jpeg",
        content: "Get inspired with creative DIY projects to enhance your home decor using handcrafted items."
    }
]




function BlogPge() {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBlogIndex((prev) => (prev + 1) % Blog.length);
    }, 5000); // Change blog every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='max-w-6xl mx-auto p-4 sm:p-6 lg:p-8'>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBlogIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className='bg-white shadow-lg rounded-lg overflow-hidden'
        >
          <div className='flex flex-col sm:flex-row'>
            {/* Image Section */}
            <div className='w-full sm:w-2/5 h-48 sm:h-64 md:h-72 lg:h-96'>
              <img 
                src={Blog[currentBlogIndex].image} 
                alt={Blog[currentBlogIndex].title} 
                className='w-full h-full object-cover'
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className='w-full sm:w-3/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between'>
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold mb-3 text-gray-800'>
                  {Blog[currentBlogIndex].title}
                </h2>
                <p className='text-gray-600 text-base sm:text-lg'>
                  {Blog[currentBlogIndex].content}
                </p>
              </div>
              
              {/* Navigation Dots */}
              <div className='flex justify-center gap-2 mt-4'>
                {Blog.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBlogIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentBlogIndex === index 
                        ? 'bg-orange-600 w-4' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to blog ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default BlogPge
