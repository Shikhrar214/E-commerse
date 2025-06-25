import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "CATEGORY", to: "/category" },
    { name: "BASKETS", to: "/all-products" },
    { name: "BAGS", to: "/all-products" },
    { name: "BASKETS", to: "/all-products" },
    { name: "HOME DECOR", to: "/all-products" },
    { name: "KITCHEN & DINING", to: "/all-products" },
    { name: "BEST SELLER", to: "/all-products" },
    { name: "ACCESSORIES", to: "/all-products" },
    { name: "ABOUT US", to: "/about" },
    { name: "Contact US", to: "/contact" },
  ];

  return (
    <header className="w-full shadow-md flex flex-col">
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
          <div
            className="text-white text-xl sm:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
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

          {/* Right Section: Search + Icons */}
          <div className="flex items-center justify-end gap-3 sm:w-1/2 w-full mt-2 sm:mt-0">
            {/* Search */}
            <div className="flex items-center gap-2 flex-1">
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
                  `hover:underline ${isActive ? "text-orange-300" : ""} transition-colors duration-300`
                }
              >
                <FaUser className="cursor-pointer" />
              </NavLink>

              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? "text-orange-300" : ""} transition-colors duration-300`
                }
              >
                <FaHeart className="cursor-pointer" />
              </NavLink>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `hover:underline ${isActive ? "text-orange-300" : ""} transition-colors duration-300`
                }
              >
                <div className="relative cursor-pointer">
                  <FaShoppingCart />
                  <span className="absolute -top-2 -right-2 text-xs bg-gray-800 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    0
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col sm:hidden bg-[#8b2f0b] p-4 gap-2"
          >
            {navStructure.map((item) => (
              <div key={item.label}>
                <div className="font-semibold text-white border-b border-white/20 pb-1">{item.label}</div>
                {(item.subCategories || []).map((cat) => (
                  <div key={cat.label} className="pl-4">
                    <div className="text-orange-200 py-1">{cat.label}</div>
                    {cat.products.map((prod) => (
                      <NavLink to={prod.path} key={prod.label} className="block py-1 pl-2 text-white/80 hover:text-orange-300">
                        {prod.label}
                      </NavLink>
                    ))}
                  </div>
                ))}
                {(item.products || []).map((prod) => (
                  <NavLink to={prod.path} key={prod.label} className="block py-1 pl-2 text-white/80 hover:text-orange-300">
                    {prod.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default HeaderNav;
