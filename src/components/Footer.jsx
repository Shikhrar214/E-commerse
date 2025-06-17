import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-white text-2xl font-bold mb-4">ACHICHIZ</h1>
          <p className="text-sm">
            Crafted with tradition, delivered with passion. Bringing handmade art to modern life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/products/bags" className="hover:underline">Bags</a></li>
            <li><a href="/products/kitchen" className="hover:underline">Kitchen</a></li>
            <li><a href="/products/home" className="hover:underline">Home Decor</a></li>
            <li><a href="/products/gift" className="hover:underline">Gifts</a></li>
          </ul>
        </div>

        {/* Social Media Icons using React Icons */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} ACHICHIZ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
