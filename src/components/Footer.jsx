import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
   <footer className="bg-[#252323] text-white py-10 px-6 sm:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

    {/* About Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <p className="text-sm leading-relaxed">
        AchiChiz brings you authentic, handmade treasures crafted by artisans across India. Preserving tradition, one product at a time.
      </p>
    </div>

    <div className='flex flex-row gap-[20px]'>
    {/* Partners */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Partners</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Crafts Council of India</a></li>
        <li><a href="#" className="hover:underline">FabIndia</a></li>
        <li><a href="#" className="hover:underline">Artisan Guilds</a></li>
        <li><a href="#" className="hover:underline">Local NGOs</a></li>
      </ul>
    </div>

    {/* Help */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Help</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">FAQs</a></li>
        <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>
    </div>

    {/* Social / Newsletter */}
    <div className='flex flex-row items-center mr-2 justify-between'>
    <div>
      <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
      <div className="flex space-x-4 mb-4">
        <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
        <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
        <a href="#" className="hover:text-yellow-300"><FaYoutube /></a>
      </div>
      <form className="flex flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="px-3 py-2 w-full sm:w-auto flex-1 text-black rounded focus:outline-none"
        />
        <button className="bg-white text-[#9c3911] px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition">
          Subscribe
        </button>
      </form>
    </div>
  </div>
    </div>

  {/* Bottom Line */}
  <div className="border-t border-white mt-10 pt-4 text-center text-sm text-gray-200">
    &copy; {new Date().getFullYear()} AchiChiz. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
