"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheckIcon,
  KeyIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/contactus";

import TestimonialSlider from "@/components/TestimonalSlider";
// Process Card Component
const ProcessCard = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Service Item Component
const ServiceItem = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-blue-50 p-4 rounded-lg text-gray-700 font-medium hover:bg-blue-100 transition-colors duration-300 text-center shadow-sm hover:shadow-md"
    >
      {service}
    </motion.div>
  );
};

// Testimonial Slider Component


// Main Component
export default function KeyHolding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Integrate with API route in a real app
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Key holding",
    "Alarm response",
    "Lock and unlock services",
    "Emergency access",
    "Key management",
    "Mobile patrols",
    "24/7 response services",
  ];

  const processSteps = [
    {
      title: "1. Key Collection",
      description:
        "We conduct a secure key collection process, ensuring your keys are safely transferred to our SIA-approved key holding facilities.",
    },
    {
      title: "2. Secure Storage",
      description:
        "Keys are stored in a high-security environment with restricted access, monitored 24/7 to ensure maximum safety.",
    },
    {
      title: "3. Rapid Response",
      description:
        "Our trained response team is available 24/7 to respond to alarms or access requests, ensuring quick and professional action.",
    },
  ];

  return (
    <section className="bg-gray-100 py-5 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto">
        {/* Header with Background Image and Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[700px] w-full bg-cover bg-center rounded-3xl shadow-2xl mb-20 overflow-hidden"
          style={{
            backgroundImage: "url('/services/Key-Holding.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 to-red-300/60 rounded-3xl"></div>
          <div className="relative container mx-auto px-6 py-16 h-full flex flex-col lg:flex-row items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 mb-10 lg:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Key Holding Services Manchester
              </h1>
              <p className="text-xl text-gray-100 max-w-lg mb-8 leading-relaxed">
                MAK Security provides professional key holding and alarm response services across Manchester and the North West, ensuring rapid response and secure key management for your business or property.
              </p>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
                className="inline-block bg-[#FF0600] text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </motion.div>
            </motion.div>
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </motion.div>

        {/* Key Holding Description */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-95"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
                Key Holding & Alarm Response Services
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="lg:w-2/3 space-y-8"
              >
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-red-500 font-semibold">Secure key management</span> is critical for protecting your business or property. MAK Security’s SIA-approved key holding services ensure your keys are stored securely and accessible only by authorized personnel.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Our rapid alarm response team is available 24/7, providing immediate action in the event of an alarm trigger, reducing risk and ensuring peace of mind without the need for on-site staff involvement.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Operating across Manchester, Liverpool, London, Birmingham, and the North West, MAK Security offers tailored key holding solutions to meet your specific needs, backed by our industry-leading certifications.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4"
                >
                  <button className="px-8 py-3 bg-[#FF0600] text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                    Request Key Holding Assessment
                  </button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:w-1/3 flex justify-center relative"
              >
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/services/Key-Holding-Response.jpeg"
                    alt="Key holding and alarm response team"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: "400px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-900/10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">24/7 Key Holding</h3>
                    <p className="text-blue-100">Secure and rapid response</p>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20 bg-[#374B5B]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Our Key Holding Services Include
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-blue-100 max-w-3xl mx-auto"
              >
                MAK Security offers comprehensive key holding and alarm response services tailored to your needs, ensuring security and convenience.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <KeyIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Key Management</h3>
                </div>
                <ul className="space-y-3">
                  {["Key holding", "Secure key storage", "Key management"].map((service) => (
                    <li key={service} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
                      <span className="text-blue-100">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Rapid Response</h3>
                </div>
                <ul className="space-y-3">
                  {["Alarm response", "24/7 response services", "Emergency access"].map((service) => (
                    <li key={service} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
                      <span className="text-blue-100">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Additional Services</h3>
                </div>
                <ul className="space-y-3">
                  {["Lock and unlock services", "Mobile patrols"].map((service) => (
                    <li key={service} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
                      <span className="text-blue-100">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-16"
            >
              <button className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl">
                Request Key Holding Solution
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20 mb-20 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/services/Key-Holding-Process.jpeg"
              alt="Key holding service process"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Process</h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2"></div>
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-red-500 transform -translate-y-1/2 animate-connector"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <ProcessCard
                      title={step.title}
                      description={step.description}
                      index={index}
                      className="relative z-10 bg-white/90 backdrop-blur-sm"
                    />
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Connected Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20"
        >
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full bg-gradient-to-br from-blue-50 to-white opacity-90"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Secure Key Holding</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our SIA-approved key holding facilities ensure your keys are stored securely with restricted access and 24/7 monitoring.
                </p>
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-400"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Rapid Alarm Response</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our 24/7 response team acts swiftly to alarm triggers, ensuring immediate action to secure your property.
                </p>
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-400"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Lock/Unlock Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We provide secure lock and unlock services for your premises, ensuring authorized access at all times.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 bg-clip-text"
              >
                Our Certifications
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                MAK Integrated Services holds SIA-approved contractor status for Security Guarding and Key Holding Services.
                <span className="block mt-2 text-blue-700 font-medium">ISO Cert No.7971</span>
              </motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
              {[
                { name: "ICO", image: "/services/ICO-logo.png" },
                { name: "SIA", image: "/services/SIA-Logo.png" },
                { name: "ISOQAR", image: "/services/ISOQAR-Logo.png" },
                { name: "NASDU", image: "/services/NASDU-logo.png" },
                { name: "SafeContractor", image: "/services/Safe-Contractor.png" },
                { name: "LS", image: "/services/LS-Logo.png" },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex items-center justify-center">
                    <div className="relative w-full h-16 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={`${cert.name} Certification`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-all duration-300 pointer-events-none"></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Call us at{" "}
            <a href="tel:01612237281" className="text-blue-600 hover:underline font-medium">
              0161 223 7281
            </a>{" "}
            or
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg text-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Sticky CTA Button */}
        <AnimatePresence>
          {isStickyVisible && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <Link
                href="/contact"
                className="bg-[#374B5B] text-white py-3 px-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Get a Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}