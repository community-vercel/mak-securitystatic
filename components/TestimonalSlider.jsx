"use client";import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "MAK Security's key holding service has been a game-changer for our business. Their rapid response is unmatched!",
      author: "Jane Wilson, Office Manager",
      role: "Commercial Client",
    },
    {
      quote: "Their key holding and alarm response services provide us with complete peace of mind. Highly professional!",
      author: "Tom Harris, Retail Manager",
      role: "Retail Sector",
    },
    {
      quote: "MAK Security's key holding team is reliable and efficient. We trust them to secure our properties.",
      author: "Emily Clark, Property Manager",
      role: "Property Management",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#FF0600] mb-12 text-center">
          Client Testimonials
        </h2>
        <div className="relative h-96 w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-center items-center"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="text-blue-500 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <p className="text-xl text-gray-700 italic mb-8 text-center leading-relaxed">
                {testimonials[current].quote}
              </p>
              <div className="text-center">
                <p className="text-[#374B5B] font-bold text-lg">{testimonials[current].author}</p>
                <p className="text-gray-500 text-sm mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-[#FF0600] w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider