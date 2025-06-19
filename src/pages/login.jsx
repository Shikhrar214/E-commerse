import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function login() {
  const [data, setData] = useState({
    Phone: "",
    Password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handlelogin = () => {
    alert(`Phone: ${data.Phone}, Password: ${data.Password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-600 px-6 py-8 text-center">
          <FaSignInAlt className="mx-auto text-white text-5xl mb-4" />
          <h2 className="text-2xl font-bold text-white">Sign In</h2>
        </div>

        <div className="px-6 py-8">
          <form action="">
            <label htmlFor="phone">Phone: </label>
            <input
              type="number"
              required
              onChange={handleChange}
              value={data.Phone}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="phone"
              placeholder="Enter your phone number"
            />

            <label htmlFor="phone">Password: </label>
            <input
              type="password"
              required
              onChange={handleChange}
              value={data.Password}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="password"
              placeholder="Enter your password"
            />
          </form>

          <div className="flex flex-col space-y-4">
            <button
              onClick={handlelogin}
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 
                       transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FaSignInAlt />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
