import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { AllProductPage } from "../index.js";

// Product list from AllProducts
const allProducts = [
  { id: 1, title: "Antique Buddha Statue", description: "Brass Buddha statue", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 2499 },
  { id: 2, title: "Crystal Water Fountain", description: "Tabletop LED fountain", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 1899 },
  { id: 3, title: "Wooden Wall Clock", description: "Teak wood clock", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 3299 },
  { id: 4, title: "Mandala Wall Art", description: "Mandala canvas art", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 1699 },
  { id: 5, title: "Ceramic Incense Holder", description: "Handcrafted incense holder", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 899 },
  { id: 6, title: "Bamboo Wind Chimes", description: "Melodious bamboo chimes", image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg", price: 1299 },
];

// Cart items (can be dynamic later)
const cartItems = [
  allProducts[0],
  allProducts[2],
];

const CartPage = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const relatedProducts = allProducts.filter(
    (item) =>
      !cartItems.some((cartItem) => cartItem.id === item.id) &&
      Math.abs(item.price - cartItems[0].price) < 1500 // similar price range
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 shadow rounded-xl"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">₹{item.price}</span>
              <button className="text-red-600 hover:text-red-800">
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="text-right mt-6">
        <h3 className="text-xl font-bold">Total: ₹{total}</h3>
        <button className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-700 transition">
          Proceed to Checkout
        </button>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">You may also like</h3>
        <AllProductPage/>
      </div>
    </div>
  );
};

export default CartPage;
