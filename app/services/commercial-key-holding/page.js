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
      className="bg-white/90 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
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

// Main Component
export default function CommercialKeyHolding() {
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
    "Commercial key holding",
    "Alarm response",
    "Lock and unlock services",
    "Emergency access",
    "Key management",
    "Mobile patrols",
    "24/7 response services",
    "Same-day courier service",
    "Dog handling services",
  ];

  const processSteps = [
    {
      title: "Key Collection",
      description:
        "One of our security team will collect the keys from you and take notes on any special and relevant instructions to access your property safely and reset your alarm.",
    },
    {
      title: "Keys Safely Stored",
      description:
        "All the keys we hold for our clients are electronically tagged and held in a secure facility.",
    },
  ];

  const additionalServices = [
    "Dog unit mobile patrol available",
    "24-hour security",
    "Licensed, uniformed mobile officers",
    "Scheduled locking and unlocking service",
    "Well-equipped vehicles",
    "Vehicles fit with tracking devices",
    "Mobile units to store your keys",
    "Storage units adhered to regulatory standards",
    "Access restricted to approved contractors",
    "Signage service to show the property is secured",
    "Well-trained security personnel",
    "Escort Service for Key Holders",
  ];

  return (
    <section className="bg-gray-100 py-5 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto">
        {/* Hero Section */}
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
                Safe and Secure Commercial Key Holding Services
              </h1>
              <p className="text-xl text-gray-100 max-w-lg mb-8 leading-relaxed">
                MAK Security offers excellent commercial key holding services for properties across Greater Manchester, Liverpool, and Birmingham.
              </p>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block bg-[#FF0600] text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/services">Find Out More</Link>
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
                Commercial Key Holding
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
                  <span className="text-red-500 font-semibold">What are Commercial Key Holding Services?</span> Simply put, we securely hold the keys for businesses in Manchester, Liverpool, and Birmingham so we can respond quickly whenever you may need us.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  MAK Security provides reliable commercial key holding services in Manchester, Liverpool, and Birmingham. Our fully trained and vetted officers arrive promptly, ensuring the safety of your business premises. We secure your keys at a local key vault or mobile unit, ensuring they are given only to authorized people.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <a href="/contact" className="px-8 py-3 bg-[#FF0600] text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                    Find Out More
                  </a>
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
                    src="/services/Key_Holding_Security.jpg"
                    alt="Commercial key holding and alarm response team"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: "400px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-900/10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">24/7 Commercial Key Holding</h3>
                    <p className="text-blue-100">Secure and rapid response</p>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Choose MAK Security
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-blue-100 max-w-3xl mx-auto"
              >
                Our commitment to excellence ensures your business premises are protected with industry-leading services.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Fast Response</h3>
                </div>
                <p className="text-blue-100">
                  We are industry leaders when it comes to speed, so when the alarm bell rings, we are there to assist... fast!
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Regulated Security</h3>
                </div>
                <p className="text-blue-100">
                  We comply with all relevant regulations to deliver highly professional commercial key holding services.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Proven Track Record</h3>
                </div>
                <p className="text-blue-100">
                  We have provided key holding services to thousands of satisfied customers, from small businesses to large enterprises.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20 mb-20 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/services/489621777_1718440492296601_8812595996159204720_n.jpg"
              alt="Commercial key holding service process"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Process</h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2"></div>
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-red-500 transform -translate-y-1/2 animate-connector"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <ProcessCard
                      title={step.title}
                      description={step.description}
                      index={index}
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

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              Many Years of Commercial Key Holding Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            >
              With many years of experience in the security industry offering commercial key holding services in Manchester, Liverpool, Birmingham, and throughout the North West, we have the knowledge and expertise to provide a first-class commercial key holding service and deal with all types of alarm systems and emergency incidents.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              We are able to look after many types of businesses, including retail properties, medical centres, schools, pubs, clubs, and construction sites, to name just a few.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8"
            >
              <a href="/contact" className="px-8 py-3 bg-[#FF0600] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Alarm Response Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              Quick and Efficient Alarm Response
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            >
              If you are looking for reliable commercial key holding services with a highly trained alarm response team to protect your property, look no further and contact MAK Security.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            >
              In the event of an intruder alarm activation or an intruder breaking into your property, we get a warning from the alarm receiving centre and ensure one of our liveried security vehicles is on-site taking action. We assist your nominated key holder to assess why the alarm has been triggered or ensure your property’s safety if we are the key holders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              We pride ourselves on our quick alarm response service and can guarantee to be at your building within a short time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8"
            >
              <a href="/contact" className="px-8 py-3 bg-[#FF0600] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Patrols Section */}
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
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-8 text-center"
            >
              Mobile Patrols
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-8"
            >
              Some locations require constant 24-hour security, while others may need random security patrols day or night. At MAK Security, we provide an excellent manned guarding patrolling service to your property, at random or pre-arranged times, to act as a visible deterrent to potential intruders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto"
            >
              Mobile patrols are site-specific; you can take advantage to guard a standalone property or we can provide a local security presence to cover multiple properties in a particular street. We work closely with the local police, ensuring all incidents are dealt with promptly and efficiently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8"
            >
              <a href="/contact" className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl">
                Find Out More
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Security Vans Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              Security Vans
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Who Turns Up</h3>
                <p className="text-lg text-gray-600 mb-4">
                  We provide professional, skilled, and experienced key holding staff who are all fully trained to attend to your alarms, emergencies, or other requirements. Our security staff are SIA licensed, have completed job-specific training, and have been trained by our SIA level 3 trainer and our training manager with over 30 years of front-line experience working for the Greater Manchester Police.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">What We Do</h3>
                <p className="text-lg text-gray-600">
                  Our officers are readily available to respond to your alarms, emergencies, or other requirements. Your site is set up on our secure system, which includes all necessary information. On-site, we complete external and internal manned patrols, looking for signs of intrusion and site vulnerabilities. Unlocks and locks can be arranged at specific times based on your requirements. MAK invests in cutting-edge technology, and all officers are equipped with reporting hardware that sends reports, including pictures, in real-time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8"
            >
              <a href="/contact" className="px-8 py-3 bg-[#FF0600] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Services Section */}
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
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-8 text-center"
            >
              What We Offer
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {additionalServices.map((service, index) => (
                <ServiceItem key={index} service={service} index={index} />
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-8"
            >
              As an extension to our core business, MAK Security provides a same-day courier service to our clients, operating 24 hours a day, 7 days a week, 365 days a year. This service is immediate and flexible, meaning we can collect and/or deliver at times that suit you or your clients.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-8"
            >
              We also offer excellent dog handling services for clients in London, Birmingham, and across the North West.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8"
            >
              <a href="/contact" className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl">
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Certifications Section */}
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
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
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
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Want To Know More?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Call us at{" "}
            <a href="tel:01612237281" className="text-blue-600 hover:underline font-medium">
              0161 223 7281
            </a>{" "}
            or
          </p>
          <motion.div >
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