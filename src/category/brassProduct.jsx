import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

const brassProducts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
    price: 'Rs. 799',
  },
];

const BrassProducts = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {brassProducts.map((product) => (
        <div
          key={product.id}
          className="backdrop-blur-md bg-white/30 hover:bg-white/60 transition-all duration-300 shadow-lg rounded-md overflow-hidden border border-gray-200 relative"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[170px] object-cover"
            />

            {/* Heart Icon */}
            <div
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer"
            >
              {favorites.includes(product.id) ? (
                <FaHeart size={18} className="text-red-500" />
              ) : (
                <CiHeart size={18} />
              )}
            </div>
          </div>

          <div className="p-2 text-sm">
            <p className="text-[10px] text-gray-500 font-semibold tracking-wider mb-1">
              BRASS PRODUCT
            </p>
            <p className="text-[11px] font-medium leading-tight text-gray-800">
              {product.title}
            </p>
            <p className="text-[12px] font-bold mt-1 text-gray-900">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrassProducts;





















// import React from 'react';
// import { CiHeart } from "react-icons/ci";

// const brassProducts = [
//   {
//     id: 1,
//     image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
//     title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
//     price: 'Rs. 799',
// },
// {
//     id: 2,
//     image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
//     title: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
//     price: 'Rs. 799',
// },

  
//   // Add more products similarly...
// ];

// const BrassProducts = () => {
//   return (

//     {
//       brassProducts.map(product) => (
//         <div key={product.id} >

//         <img src={product.image} alt={product.title} />

//         </div>



//       )

//     }




//     // <div className="w-[172px] shadow-md rounded-md overflow-hidden border border-gray-200 relative bg-white">
//     //   <img
//     //     src={image}
//     //     alt={title}
//     //     className="w-full h-[170px] object-cover"
//     //   />

//     //   {/* Heart Icon */}
//     //   <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
//     //     <CiHeart size={18} />
//     //   </div>

//     //   <div className="p-2 text-sm">
//     //     <p className="text-[10px] text-gray-500 font-semibold tracking-wider mb-1">
//     //       BRASS PRODUCT
//     //     </p>
//     //     <p className="text-[11px] font-medium leading-tight text-gray-800">
//     //       {title}
//     //     </p>
//     //     <p className="text-[12px] font-bold mt-1 text-gray-900">{price}</p>
//     //   </div>
//     // </div>
//   );
// };

// export default BrassProducts;
