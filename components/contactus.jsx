"use client";

import { motion, AnimatePresence } from "framer-motion";


import TestimonialSlider from "@/components/TestimonalSlider";
const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/3 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8"
    >
      <h2 className="text-2xl font-semibold text-[#FF0600] mb-6 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ease-in-out hover:border-red-400 focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ease-in-out hover:border-red-400 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ease-in-out hover:border-red-400 focus:outline-none"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ease-in-out hover:border-red-400 focus:outline-none"
            placeholder="Enter your phone"
            required
          />
        </div>
        <div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#FF0600] text-white py-3 rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;