import React from "react";
import { FiHeart, FiTrash2 } from "react-icons/fi";

const favoriteItems = [
  {
    id: 1,
    name: "Brass Candle Holder",
    price: 499,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Handwoven Basket",
    price: 349,
    image: "https://via.placeholder.com/100",
  },
];

const FavoritesPage = () => {
  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Favorites</h2>

      {favoriteItems.length === 0 ? (
        <p className="text-center text-gray-500">You have no favorite items yet.</p>
      ) : (
        <div className="space-y-6">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 shadow rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-blue-600 hover:text-blue-800">
                  <FiHeart size={20} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
