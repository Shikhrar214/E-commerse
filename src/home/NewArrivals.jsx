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
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[150px] px-4 sm:px-6 md:px-20 py-10">
  {newArrivals.map((item, index) => (
    <div
      key={index}
      className={`relative group overflow-hidden rounded-xl shadow-md cursor-pointer 
        ${index % 5 === 0 ? 'col-span-2 row-span-1' : 'row-span-2 col-span-1'}
      `}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#443202] to-transparent z-10"></div>

      {/* Info text */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-black opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-500 z-20">
        <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
        <p className="text-xs sm:text-sm">{item.info}</p>
      </div>
    </div>
  ))}
</div>


  );
}
