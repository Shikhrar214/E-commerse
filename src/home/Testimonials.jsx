import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Jane Doe",
      company: "SomeCompany LLC.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "I love this product! Amazing experience overall.",
      name: "Emily Clark",
      company: "TechWiz Co.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote: "Fantastic service and wonderful quality!",
      name: "Sarah Williams",
      company: "Brandly Inc.",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      quote: "Quick delivery and great communication.",
      name: "Olivia Smith",
      company: "OliveCraft",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      quote: "I would recommend this to anyone!",
      name: "Emma Brown",
      company: "Designify",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  useEffect(() => {
    const updateTestimonialsPerPage = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(3);
      }
    };

    updateTestimonialsPerPage();
    window.addEventListener("resize", updateTestimonialsPerPage);
    return () => window.removeEventListener("resize", updateTestimonialsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };

  return (
    <section className="bg-[#ffffff] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Testimonials</h2>
        <p className="text-gray-500 mb-8 sm:mb-10">Our customers speak for us</p>

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            <AnimatePresence mode="wait">
              {getCurrentTestimonials().map((item, index) => (
                <motion.div
                  key={currentPage * testimonialsPerPage + index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center"
                >
                  <FaQuoteLeft className="text-gray-400 text-xl mb-4" />
                  <p className="text-gray-600 text-sm mb-4">{item.quote}</p>
                  <FaQuoteRight className="text-gray-400 text-xl mb-4" />
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mb-2"
                  />
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? "bg-gray-800 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
