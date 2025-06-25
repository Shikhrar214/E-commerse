import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const navStructure = [
  {
    label: 'Badges & Trophy',
    path: '/badges-trophy',
    subCategories: [
      {
        label: 'Acrylic',
        products: [
          { label: 'Acrylic Momento', path: '/badges-trophy/acrylic-momento' },
          { label: 'Acrylic Trophy', path: '/badges-trophy/acrylic-trophy' },
        ],
      },
      {
        label: 'Badges',
        products: [
          { label: 'Badges', path: '/badges-trophy/badges' },
          { label: 'Badges Wedding', path: '/badges-trophy/badges-wedding' },
        ],
      },
      {
        label: 'Others',
        products: [
          { label: 'Desk Organizer', path: '/badges-trophy/desk-organizer' },
          { label: 'Trophy', path: '/badges-trophy/trophy' },
          { label: 'Wooden Trophy', path: '/badges-trophy/wooden-trophy' },
        ],
      },
    ],
  },
  {
    label: 'Birthday & Wedding',
    path: '/birthday-wedding',
    subCategories: [
      {
        label: 'Anniversary Gifts',
        products: [
          { label: 'Anniversary Gift', path: '/birthday-wedding/anniversary-gift' },
          { label: 'Wedding Plaque', path: '/birthday-wedding/wedding-plaque' },
        ],
      },
      {
        label: 'Acrylic',
        products: [
          { label: '3D Doctor Lamp', path: '/birthday-wedding/3d-doctor-lamp' },
          { label: 'Customized Standy', path: '/birthday-wedding/custom-standy' },
        ],
      },
    ],
  },
  {
    label: 'Cake Top',
    path: '/cake-top',
    products: [
      { label: 'Cake Top', path: '/cake-top/plain' },
      { label: 'Customized Acrylic Cake Top', path: '/cake-top/custom' },
    ],
  },
  {
    label: 'Corporate Gifts',
    path: '/corporate-gifts',
    products: [
      { label: 'Bottle', path: '/corporate-gifts/bottle' },
      { label: 'Customized Mug', path: '/corporate-gifts/mug' },
    ],
  },
  {
    label: 'Cushion & Pillow',
    path: '/cushion-pillow',
    products: [
      { label: 'Customized Fur Kushan Print', path: '/cushion-pillow/fur-kushan' },
      { label: 'Face Cushion', path: '/cushion-pillow/face' },
    ],
  },
  {
    label: 'Customized Clock',
    path: '/customized-clock',
    products: [
      { label: 'Customized Wall Clock', path: '/customized-clock/wall' },
      { label: 'Wooden Clock', path: '/customized-clock/wooden' },
    ],
  },
  {
    label: 'Decoration Items',
    path: '/decoration-items',
    products: [
      { label: 'Neon Logo', path: '/decoration-items/neon-logo' },
      { label: 'Wall Art Ganesh Ji', path: '/decoration-items/ganesh-art' },
    ],
  },
  {
    label: 'Photo Frame',
    path: '/photo-frame',
    products: [
      { label: 'Birthday Frame', path: '/photo-frame/birthday' },
      { label: 'Spotify Frame', path: '/photo-frame/spotify' },
    ],
  },
];

function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-[#9c3911] text-white w-full z-50">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-bold">AchiChiz</h1>
        <button className="sm:hidden text-2xl" onClick={toggleMobile}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop */}
      <nav className="hidden sm:flex gap-4 justify-center bg-[#8b2f0b] p-2">
        {navStructure.map((item) => (
          <div className="group relative" key={item.label}>
            <NavLink to={item.path} className="hover:underline">
              {item.label}
            </NavLink>
            {(item.subCategories || item.products) && (
              <div className="absolute hidden group-hover:flex flex-col bg-white text-black rounded shadow p-2 top-full min-w-[12rem] z-50">
                {(item.subCategories || []).map((cat) => (
                  <div key={cat.label}>
                    <div className="font-bold px-2 py-1">{cat.label}</div>
                    {cat.products.map((prod) => (
                      <NavLink to={prod.path} key={prod.label} className="block px-4 py-1 hover:bg-orange-100">
                        {prod.label}
                      </NavLink>
                    ))}
                  </div>
                ))}
                {(item.products || []).map((prod) => (
                  <NavLink to={prod.path} key={prod.label} className="block px-4 py-1 hover:bg-orange-100">
                    {prod.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile */}
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
