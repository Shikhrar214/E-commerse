import React from "react";

const MeetTheMaestros = () => {
  const maestros = [
    {
      id: 1,
      title: "Aarav Sharma",
      image: "/about/images.jpeg",
      description:
        "Master potter with 30+ years of experience in crafting heritage ceramics. Aarav blends tradition with contemporary design.",
    },
    {
      id: 2,
      title: "Diya Patel",
      image: "/about/images.jpeg",
      description:
        "Textile expert known for reviving ancient block printing techniques. Diya’s prints have adorned both homes and haute couture.",
    },
    {
      id: 3,
      title: "Karan Verma",
      image: "/about/images.jpeg",
      description:
        "Woodworking artisan specializing in hand-carved temple décor. Karan’s work reflects spiritual depth and fine detailing.",
    },
    {
      id: 4,
      title: "Meera Joshi",
      image: "/about/images.jpeg",
      description:
        "Jewelry designer inspired by nature and mythology. Meera’s intricate pieces are celebrated across artisanal fairs.",
    },
    {
      id: 5,
      title: "Raghav Rao",
      image: "/about/images.jpeg",
      description:
        "Metalwork maestro who breathes life into brass and copper. Raghav's creations are part of heritage collections worldwide.",
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-[#8b4526]">
        Meet the Maestros
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {maestros.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={person.image}
              alt={person.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <h4 className="text-xl font-semibold mb-2 text-black">{person.title}</h4>
              <p className="text-gray-700 text-sm mb-4">{person.description}</p>
              <button
                className="self-start bg-[#8b4526] text-white px-5 py-2 rounded-full shadow hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm"
                onClick={() => alert(`Know more about ${person.title}`)}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheMaestros;
