import React from "react";

const newArrivals = [
  {
    name: "Handcrafted Vase",
    image: "https://images.pexels.com/photos/2091151/pexels-photo-2091151.jpeg",
    info: "Elegant ceramic piece with floral detailing.",
  },
  {
    name: "Woven Wall Art",
    image: "https://images.pexels.com/photos/1940986/pexels-photo-1940986.jpeg",
    info: "Traditional weaving with vibrant colors.",
  },
  {
    name: "Brass Decor Plate",
    image: "https://images.pexels.com/photos/1095817/pexels-photo-1095817.jpeg",
    info: "Hand-hammered and polished to perfection.",
  },
  {
    name: "Terracotta Pot",
    image: "https://images.pexels.com/photos/4483614/pexels-photo-4483614.jpeg",
    info: "Earthy charm with rustic textures.",
  },
  {
    name: "Carved Wooden Box",
    image: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg",
    info: "Intricate craftsmanship with classic locks.",
  },
  {
    name: "Textile Table Runner",
    image: "https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg",
    info: "Colorful hand-embroidered fabric.",
  },
];

export default function NewArrivals() {
  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-[#f9f1e7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-[#a4552f]">
          New Arrivals
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newArrivals.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 sm:h-64 object-cover transform duration-500 group-hover:scale-110"
              />

              {/* Bottom fade effect */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f9f1e7] to-transparent z-10"></div>

              {/* Hover popup */}
             <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-black opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                <p className="text-xs sm:text-sm">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
