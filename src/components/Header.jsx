import React, { useState } from 'react';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

 

  return (
    <header className="w-full shadow-md">
      {/* Top Notice Bar */}
      <div className="bg-gray-800 text-white text-sm py-1 text-center flex justify-center items-center gap-2">
        <span className="text-lg">←</span>
        <span>Free Home Shipping above 5000</span>
        <span className="text-lg">→</span>
      </div>

      {/* Main Header */}
      <div className="bg-[#9c3911] px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Hamburger */}
        <div className="text-white text-xl sm:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Left: Search */}
        <div className="flex items-center w-full sm:w-1/3 mt-2 sm:mt-0">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-transparent border-b border-white placeholder-white text-white focus:outline-none"
          />
        </div>

        {/* Center: Logo */}
        <div className="text-white text-2xl font-bold text-center w-full sm:w-1/3 py-2 sm:py-0">
          AchiChiz
        </div>

        {/* Right: Country and Icons */}
        <div className="flex items-center justify-end w-full sm:w-1/3 gap-4 text-white">
          <select className="bg-transparent text-white text-sm outline-none">
            <option>India (INR ₹)</option>
          </select>
          <FaUser className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-gray-800 text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex bg-[#8b2f0b] text-white text-sm py-2 px-4 sm:px-8 justify-center gap-6">
        {/* {navItems.map((item, i) => (
          <a key={i} href="#" className="hover:underline">
            {item}
          </a>
        ))} */}
        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          Home
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          BAGS
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          BASKETS
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          HOME DECOR
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          KITCHEN & DINING
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          BEST SELLER
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          ACCESSORIES
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          ABOUT US
        </NavLink>
      </nav>

      {/* Mobile Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#8b2f0b] text-white text-sm flex flex-col px-4 py-2 space-y-2 overflow-hidden"
          >
            {/* {navItems.map((item, i) => (
              <a key={i} href="#" className="py-1 border-b border-white/20">
                {item}
              </a>
            ))} */}


<NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          Home
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          BAGS
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          BASKETS
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          HOME DECOR
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          KITCHEN & DINING
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          BEST SELLER
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          ACCESSORIES
        </NavLink>

        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          ABOUT US
        </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
