import React, { useState } from 'react';
import { motion } from 'framer-motion';

function AllProductPage() {
    const products = [
    {
      id: 1,
      title: "Traditional Buddha Statue",
      description: "Hand-carved brass Buddha statue featuring intricate detailing",
      longDescription: "This exquisite Buddha statue is meticulously hand-carved by skilled artisans using traditional techniques. The statue radiates peace and serenity, making it perfect for meditation spaces.",
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
      price: "₹2,499",
      category: "Spiritual",
      material: "Brass",
      dimensions: "12 x 8 x 20 cm",
      weight: "1.2 kg",
      inStock: true,
      rating: 4.8,
      reviews: 125,
      tags: ["meditation", "spiritual", "decor"]
    },
    {
      id: 2,
      title: "Crystal Healing Fountain",
      description: "Indoor tabletop fountain with natural crystals and LED lighting",
      longDescription: "Create a peaceful atmosphere with this elegant crystal fountain. Features color-changing LED lights and genuine crystals for a calming effect.",
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
      price: "₹3,999",
      category: "Home Decor",
      material: "Crystal, Glass",
      dimensions: "25 x 25 x 30 cm",
      weight: "2.5 kg",
      inStock: true,
      rating: 4.6,
      reviews: 89,
      tags: ["fountain", "crystal", "lighting"]
    },
    {
        id: 3,
        title: "Handwoven Bamboo Basket",
        description: "Traditional bamboo basket with intricate weaving patterns",
        longDescription: "Each basket is handwoven by skilled artisans using sustainable bamboo. Perfect for storage or as a decorative piece.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹1,299",
        category: "Home Decor",
        material: "Bamboo",
        dimensions: "30 x 30 x 15 cm",
        weight: "0.5 kg",
        inStock: true,
        rating: 4.5,
        reviews: 67,
        tags: ["storage", "eco-friendly", "handmade"]
    },
    {
        id: 1,
        title: "Traditional Buddha Statue",
        description: "Hand-carved brass Buddha statue featuring intricate detailing",
        longDescription: "This exquisite Buddha statue is meticulously hand-carved by skilled artisans using traditional techniques. The statue radiates peace and serenity, making it perfect for meditation spaces.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹2,499",
        category: "Spiritual",
        material: "Brass",
        dimensions: "12 x 8 x 20 cm",
        weight: "1.2 kg",
        inStock: true,
        rating: 4.8,
        reviews: 125,
        tags: ["meditation", "spiritual", "decor"]
      },
      {
        id: 2,
        title: "Crystal Healing Fountain",
        description: "Indoor tabletop fountain with natural crystals and LED lighting",
        longDescription: "Create a peaceful atmosphere with this elegant crystal fountain. Features color-changing LED lights and genuine crystals for a calming effect.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹3,999",
        category: "Home Decor",
        material: "Crystal, Glass",
        dimensions: "25 x 25 x 30 cm",
        weight: "2.5 kg",
        inStock: true,
        rating: 4.6,
        reviews: 89,
        tags: ["fountain", "crystal", "lighting"]
      },
      {
          id: 3,
          title: "Handwoven Bamboo Basket",
          description: "Traditional bamboo basket with intricate weaving patterns",
          longDescription: "Each basket is handwoven by skilled artisans using sustainable bamboo. Perfect for storage or as a decorative piece.",
          image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
          price: "₹1,299",
          category: "Home Decor",
          material: "Bamboo",
          dimensions: "30 x 30 x 15 cm",
          weight: "0.5 kg",
          inStock: true,
          rating: 4.5,
          reviews: 67,
          tags: ["storage", "eco-friendly", "handmade"]
      },
      {
        id: 1,
        title: "Traditional Buddha Statue",
        description: "Hand-carved brass Buddha statue featuring intricate detailing",
        longDescription: "This exquisite Buddha statue is meticulously hand-carved by skilled artisans using traditional techniques. The statue radiates peace and serenity, making it perfect for meditation spaces.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹2,499",
        category: "Spiritual",
        material: "Brass",
        dimensions: "12 x 8 x 20 cm",
        weight: "1.2 kg",
        inStock: true,
        rating: 4.8,
        reviews: 125,
        tags: ["meditation", "spiritual", "decor"]
      },
      {
        id: 2,
        title: "Crystal Healing Fountain",
        description: "Indoor tabletop fountain with natural crystals and LED lighting",
        longDescription: "Create a peaceful atmosphere with this elegant crystal fountain. Features color-changing LED lights and genuine crystals for a calming effect.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹3,999",
        category: "Home Decor",
        material: "Crystal, Glass",
        dimensions: "25 x 25 x 30 cm",
        weight: "2.5 kg",
        inStock: true,
        rating: 4.6,
        reviews: 89,
        tags: ["fountain", "crystal", "lighting"]
      },
      {
          id: 3,
          title: "Handwoven Bamboo Basket",
          description: "Traditional bamboo basket with intricate weaving patterns",
          longDescription: "Each basket is handwoven by skilled artisans using sustainable bamboo. Perfect for storage or as a decorative piece.",
          image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
          price: "₹1,299",
          category: "Home Decor",
          material: "Bamboo",
          dimensions: "30 x 30 x 15 cm",
          weight: "0.5 kg",
          inStock: true,
          rating: 4.5,
          reviews: 67,
          tags: ["storage", "eco-friendly", "handmade"]
      },
      {
        id: 1,
        title: "Traditional Buddha Statue",
        description: "Hand-carved brass Buddha statue featuring intricate detailing",
        longDescription: "This exquisite Buddha statue is meticulously hand-carved by skilled artisans using traditional techniques. The statue radiates peace and serenity, making it perfect for meditation spaces.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹2,499",
        category: "Spiritual",
        material: "Brass",
        dimensions: "12 x 8 x 20 cm",
        weight: "1.2 kg",
        inStock: true,
        rating: 4.8,
        reviews: 125,
        tags: ["meditation", "spiritual", "decor"]
      },
      {
        id: 2,
        title: "Crystal Healing Fountain",
        description: "Indoor tabletop fountain with natural crystals and LED lighting",
        longDescription: "Create a peaceful atmosphere with this elegant crystal fountain. Features color-changing LED lights and genuine crystals for a calming effect.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹3,999",
        category: "Home Decor",
        material: "Crystal, Glass",
        dimensions: "25 x 25 x 30 cm",
        weight: "2.5 kg",
        inStock: true,
        rating: 4.6,
        reviews: 89,
        tags: ["fountain", "crystal", "lighting"]
      },
      {
          id: 3,
          title: "Handwoven Bamboo Basket",
          description: "Traditional bamboo basket with intricate weaving patterns",
          longDescription: "Each basket is handwoven by skilled artisans using sustainable bamboo. Perfect for storage or as a decorative piece.",
          image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
          price: "₹1,299",
          category: "Home Decor",
          material: "Bamboo",
          dimensions: "30 x 30 x 15 cm",
          weight: "0.5 kg",
          inStock: true,
          rating: 4.5,
          reviews: 67,
          tags: ["storage", "eco-friendly", "handmade"]
      },
      {
        id: 1,
        title: "Traditional Buddha Statue",
        description: "Hand-carved brass Buddha statue featuring intricate detailing",
        longDescription: "This exquisite Buddha statue is meticulously hand-carved by skilled artisans using traditional techniques. The statue radiates peace and serenity, making it perfect for meditation spaces.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹2,499",
        category: "Spiritual",
        material: "Brass",
        dimensions: "12 x 8 x 20 cm",
        weight: "1.2 kg",
        inStock: true,
        rating: 4.8,
        reviews: 125,
        tags: ["meditation", "spiritual", "decor"]
      },
      {
        id: 2,
        title: "Crystal Healing Fountain",
        description: "Indoor tabletop fountain with natural crystals and LED lighting",
        longDescription: "Create a peaceful atmosphere with this elegant crystal fountain. Features color-changing LED lights and genuine crystals for a calming effect.",
        image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
        price: "₹3,999",
        category: "Home Decor",
        material: "Crystal, Glass",
        dimensions: "25 x 25 x 30 cm",
        weight: "2.5 kg",
        inStock: true,
        rating: 4.6,
        reviews: 89,
        tags: ["fountain", "crystal", "lighting"]
      },
      {
          id: 3,
          title: "Handwoven Bamboo Basket",
          description: "Traditional bamboo basket with intricate weaving patterns",
          longDescription: "Each basket is handwoven by skilled artisans using sustainable bamboo. Perfect for storage or as a decorative piece.",
          image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
          price: "₹1,299",
          category: "Home Decor",
          material: "Bamboo",
          dimensions: "30 x 30 x 15 cm",
          weight: "0.5 kg",
          inStock: true,
          rating: 4.5,
          reviews: 67,
          tags: ["storage", "eco-friendly", "handmade"]
      },
      

  ];
  const [visibleProducts, setVisibleProducts] = useState(8); // Show 8 products initially

  // ...existing products array...

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 8, products.length));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-bold text-gray-900">{product.price}</p>
                  <button 
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 
                             transition-colors duration-200 text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-lg
                       hover:bg-orange-600 hover:text-white transition-colors duration-200 font-medium"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProductPage;