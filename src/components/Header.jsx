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
    <header className="w-full shadow-md flex flex-col ">
      {/* Top Notice Bar */}
      <div className="bg-gray-800 text-white text-sm py-1 text-center flex justify-center items-center gap-2">
        <span className="text-lg">←</span>
        <span>Free Home Shipping above 5000</span>
        <span className="text-lg">→</span>
      </div>

      {/* Main Header */}
  <div className="bg-[#9c3911] px-4 py-3 relative">
  <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
    
    {/* Hamburger - Mobile only */}
    <div className="text-white text-xl sm:hidden cursor-pointer" onClick={toggleMobileMenu}>
      {mobileMenuOpen ? <FaTimes /> : <FaBars />}
    </div>

    {/* Left: Logo */}
    <div className="flex items-center sm:w-1/6">
      <img
        src="/navbar/logo.png"
        alt="logo"
        className="h-6 sm:h-16 w-auto object-contain"
      />
    </div>

    {/* Center: Brand Name  */}
    <div className="absolute left-1/2 transform-translate-x-1/2 sm:static sm:translate-x-0 mb:w-1/4 text-center">
      <img
        src="/navbar/bgr.png"
        alt="AchiChiz"
        className="h-10 sm:h-14 w-auto object-contain mx-auto"
      />
    </div>

    {/* Right Section: Search + Icons together */}
    <div className="flex items-center justify-end gap-3 sm:w-1/2 w-full mt-2 sm:mt-0">
      
      {/* Search */}
      <div className="flex items-center   gap-2 flex-1">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full bg-transparent border-b border-white placeholder-white text-white focus:outline-none"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3 text-white">
        <select className="bg-transparent text-white text-sm outline-none">
          <option>India (INR ₹)</option>
        </select>
         <NavLink 
        to="/login" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
        <FaUser className="cursor-pointer" />
        </NavLink>
 <NavLink 
        to="favorites" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
        <FaHeart className="cursor-pointer" />
        </NavLink>
 <NavLink 
        to="Cart" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
        <div className="relative cursor-pointer">
          <FaShoppingCart />
          <span className="absolute -top-2 -right-2 text-xs bg-gray-800 text-white rounded-full w-4 h-4 flex items-center justify-center">
            
          </span>
        </div>
        </NavLink>

      </div>
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
        to="bags" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          BAGS
        </NavLink>

        <NavLink 
        to="basket" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          BASKETS
        </NavLink>

        <NavLink 
        to="home-decore" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          HOME DECOR
        </NavLink>

        <NavLink 
        to="kitchen" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          KITCHEN & DINING
        </NavLink>

        <NavLink 
        to="best-seller" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          BEST SELLER
        </NavLink>

        <NavLink 
        to="accessories" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          ACCESSORIES
        </NavLink>

        <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          ABOUT US
        </NavLink>

        <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300`
        }
        >
          Contact US
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
        to="bags" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          BAGS
        </NavLink>

        <NavLink 
        to="basket" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          BASKETS
        </NavLink>

        <NavLink 
        to="home-decore" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          HOME DECOR
        </NavLink>

        <NavLink 
        to="kitchen" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          KITCHEN & DINING
        </NavLink>

        <NavLink 
        to="best-seller" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          BEST SELLER
        </NavLink>

        <NavLink 
        to="accessories" 
        className={({ isActive }) => 
          `hover:underline ${isActive ? 'text-orange-300' : ''} transition-colors duration-300 py-1 border-b border-white/20`
        }
        >
          ACCESSORIES
        </NavLink>

        <NavLink 
        to="about" 
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
