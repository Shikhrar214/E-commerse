import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Star, Award, Shield, Heart } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { NavLink } from "react-router";

const maestros = [
  {
    name: "Sneh Gangal",
    image: "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg",
    story: "A legacy artisan preserving the ancient metalwork tradition for over 3 decades.",
    specialty: "Metalwork Master",
    experience: "30+ Years",
    location: "Rajasthan",
  },
  {
    name: "Zahid Beigh",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    story: "Specializing in Kashmiri woodcraft, Zahid blends modern elegance with culture.",
    specialty: "Woodcraft Artisan",
    experience: "25+ Years",
    location: "Kashmir",
  },
  {
    name: "Gajender Soni",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
    story: "Master of intricate miniature paintings rooted in Rajasthani heritage.",
    specialty: "Miniature Painter",
    experience: "20+ Years",
    location: "Rajasthan",
  },
  {
    name: "Priya Sharma",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    story: "Textile artisan weaving stories through vibrant fabrics and traditional patterns.",
    specialty: "Textile Designer",
    experience: "15+ Years",
    location: "Gujarat",
  },
];

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    text: "Curated from across the country",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Star className="w-6 h-6" />,
    text: "Premium quality at affordable prices",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    text: "Guaranteed Authenticity",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    text: "Each design a legacy for generations",
    gradient: "from-red-400 to-pink-500",
  },
];

export default function MeetTheMaestros() {
  return (
    <section className="w-full bg-gradient-to-br from-[#d1956c] via-[#c8835a] to-[#b8724d] text-white py-20 px-6 md:px-20 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium"> Master Artisans</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Timeless Masterpieces Created by{" "}
              <span className="text-yellow-300">India's Highly Acclaimed</span>{" "}
              Master Artisans
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Discover the extraordinary craftsmanship of India's most talented artisans, 
              each piece telling a story of tradition, passion, and heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-3">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-2 rounded-lg text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {feature.icon}
                  </div>
                  <span className="text-white/90 group-hover:text-white transition-colors leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            
            <NavLink 
            to="/blog">
              
              <button className="bg-gradient-to-r from-[#a4552f] to-[#8b4526] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
              LEARN MORE
            </button>
            </NavLink>
            
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#a4552f] transition-all duration-300 font-semibold">
              MEET ALL MAESTROS
            </button>
          </div>
        </div>

        {/* Right Carousel Section */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
              Meet the Maestros
            </h3>
            <p className="text-white/80">Artisans preserving India's rich heritage</p>
          </div>
          
          <div className="relative">
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{ 
                delay: 3000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true 
              }}
              loop={true}
              speed={1000}
              className="maestros-swiper"
            >
              {maestros.map((artist, index) => (
                <SwiperSlide key={index} className="!w-80 !h-96">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {artist.location}
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{artist.name}</h4>
                      <p className="text-sm text-orange-600 font-semibold mb-2">{artist.specialty}</p>
                      <p className="text-xs text-gray-600 mb-3 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {artist.experience}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">{artist.story}</p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d1956c]/95 to-[#a4552f]/95 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-2xl font-bold mb-3">{artist.name}</h4>
                        <div className="w-16 h-1 bg-yellow-300 mx-auto mb-4"></div>
                        <p className="text-orange-200 font-semibold mb-2">{artist.specialty}</p>
                        <p className="text-sm leading-relaxed mb-4">{artist.story}</p>
                        <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#a4552f] transition-all duration-300">
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx>{`
        .maestros-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
        }
        .maestros-swiper .swiper-pagination-bullet-active {
          background: #fbbf24;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}