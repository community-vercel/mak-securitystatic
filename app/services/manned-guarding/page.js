"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { 
  ShieldCheckIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
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
            className="w-full bg-[#FF0600] text-white py-3 rounded-lg  transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

// Sub-component for Service Process Card
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

// Sub-component for Service Item
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

// Sub-component for Testimonial Slider
const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "MAK Security's guards are professional and reliable. They transformed our site's security!",
      author: "John Doe, Property Manager",
      role: "Commercial Client"
    },
    {
      quote: "Their rapid response and expertise gave us peace of mind. Highly recommend!",
      author: "Sarah Smith, Business Owner",
      role: "Retail Sector"
    },
    {
      quote: "The team at MAK Security is top-notch. Their service is unmatched in the industry.",
      author: "Michael Brown, Event Organizer",
      role: "Event Security"
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-rotation with cleanup
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
        
        {/* Fixed size testimonial container */}
        <div className="relative h-96 w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-center items-center"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
              }}
            >
              {/* Quote icon */}
              <div className="text-blue-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          
          {/* Navigation dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-[#FF0600] w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
export default function MannedGuarding() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
  });

  // State for sticky CTA visibility
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, integrate with an API route
  };

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services list
  const services = [
    'Commercial guarding',
    'Construction guarding',
    'Retail guarding',
    'Site evictions',
    'Car park management',
    'Dynamic guarding services',
    'Event security',
    'Concierge security',
    'Trespass management',
    'Residential guarding',
    'Vacant property guarding',
  ];

  // Process steps
  const processSteps = [
    {
      title: '1. Site Visit',
      description:
        'Request a free, no-obligation quotation. We conduct a comprehensive site survey, risk assessment, and discuss your security requirements to tailor a solution that fits your needs perfectly.',
    },
    {
      title: '2. Service Delivery',
      description:
        'Our team handles the installation of CCTV or patrol systems, or provides onsite training for manned guarding and mobile services, ensuring seamless deployment and operational readiness.',
    },
    {
      title: '3. Friendly Support',
      description:
        'A dedicated account manager is assigned to you, available 24/7 to provide support and ensure smooth service delivery or deployment throughout the process.',
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
            backgroundImage:
              "url('/services/Mak-Security-Services.jpeg')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 to-red-300/60 rounded-3xl"></div>
          <div className="relative container mx-auto px-6 py-16 h-full flex flex-col lg:flex-row items-center justify-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 mb-10 lg:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Security Guards Manchester
              </h1>
              <p className="text-xl text-gray-100 max-w-lg mb-8 leading-relaxed">
                MAK Security delivers industry-leading security guard services across Manchester and the North West, ensuring unparalleled protection and peace of mind for your business and properties.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-[#FF0600] text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </motion.div>
            </motion.div>
            {/* Form */}
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </motion.div>

{/* Manned Guarding Description */}
<section className="relative py-20 overflow-hidden">
  {/* Background Decorative Elements */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-95"></div>
    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
        Manned Guarding Services
      </h2>
      <div className="w-24 h-1 bg-red-500 mx-auto"></div>
    </motion.div>

    {/* Main Content */}
    <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
      {/* Text Content - Left Side */}
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
          <span className="text-red-500 font-semibold">Damage from burglary or vandalism</span> can have profound financial and emotional consequences. At MAK Security, we recognize the importance of robust protection, which is why our security guard services are designed to provide a formidable visual deterrent against theft and vandalism.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          While CCTV systems are valuable, nothing compares to the immediate response capability of a physical security presence. Our guards are trained to react swiftly and appropriately, ensuring that any threatening or potentially dangerous situation is managed promptly and effectively.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          With reduced funding impacting police response times across the UK, the demand for professional Security Officers has surged. MAK Security provides highly trained guards to clients in Manchester, Liverpool, London, Birmingham, and throughout the North West, delivering tailored security solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-4"
        >
          <button className="px-8 py-3 bg-[#FF0600] text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
            Request Security Assessment
          </button>
        </motion.div>
      </motion.div>

      {/* Image - Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:w-1/3 flex justify-center relative"
      >
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/services/Manned-Guarding.jpeg"
            alt="Professional security team on duty"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ minHeight: '400px' }}
          />
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-900/10"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">24/7 Protection</h3>
            <p className="text-blue-100">Professional security personnel</p>
          </div>
          {/* Corner accent */}
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
  {/* Decorative Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
  </div>

  <div className="container mx-auto px-4 relative">
    {/* Section Header */}
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Our Security Guarding Services Include
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl text-blue-100 max-w-3xl mx-auto"
      >
        With our flexibility and skill set, MAK can offer value-added services tailored to your bespoke security needs.
      </motion.p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Service Category 1 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <ShieldCheckIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">Commercial Security</h3>
        </div>
        <ul className="space-y-3">
          {['Commercial guarding', 'Retail guarding', 'Concierge security'].map((service) => (
            <li key={service} className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-blue-100">{service}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Service Category 2 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <BuildingOfficeIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">Property Protection</h3>
        </div>
        <ul className="space-y-3">
          {['Construction guarding', 'Vacant property guarding', 'Site evictions'].map((service) => (
            <li key={service} className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-blue-100">{service}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Service Category 3 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-300 transition-all"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <UsersIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">Specialized Services</h3>
        </div>
        <ul className="space-y-3">
          {['Event security', 'Car park management', 'Dynamic guarding services', 'Trespass management', 'Residential guarding'].map((service) => (
            <li key={service} className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-blue-100">{service}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-center mt-16"
    >
      <button className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl">
        Request Custom Security Solution
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
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/services/Manned-Guarding.jpeg" 
      alt="Security guards on duty"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Process</h2>
    
    {/* Process Steps with Connectors */}
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
            
            {/* Connector dots */}
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
  {/* Background Decoration */}
  <div className="absolute inset-0 -z-10">
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-white opacity-90"></div>
  </div>

  {/* Main Container */}
  <div className="container mx-auto px-4">
    {/* Connection Line */}
    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2"></div>
    
    {/* Horizontal Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
      {/* MAK Personnel */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">MAK Personnel</h2>
        <p className="text-gray-600 leading-relaxed">
          Our team of skilled, professional, and experienced Security Guards is fully equipped to handle a wide range of manned guarding assignments...
        </p>
        {/* Connector Arrow */}
        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </motion.div>

      {/* MAK Ethos */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">MAK Ethos</h2>
        <p className="text-gray-600 leading-relaxed">
          At MAK Security, our manned security guards are trained to adopt a proactive and professional approach, going the extra mile from day one...
        </p>
        {/* Connector Arrow */}
        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </motion.div>

      {/* Vacant Property Guarding */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Vacant Property Guarding</h2>
        <p className="text-gray-600 leading-relaxed">
          Vacant properties are prime targets for vandals, criminals, trespassers, and unauthorized visitors...
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
    {/* Header */}
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

    {/* Logo Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
      {[
        { name: 'ICO', image: '/services/ICO-logo.png' },
        { name: 'SIA', image: '/services/SIA-Logo.png' },
        { name: 'ISOQAR', image: '/services/ISOQAR-Logo.png' },
        { name: 'NASDU', image: '/services/NASDU-logo.png' },
        { name: 'SafeContractor', image: '/services/Safe-Contractor.png' },
        { name: 'LS', image: '/services/LS-Logo.png' },
      ].map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="group relative"
        >
          {/* Logo Container */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex items-center justify-center">
            <div className="relative w-full h-16 flex items-center justify-center">
              {/* Actual Logo Image */}
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
            Call us at{' '}
            <a href="tel:01612237281" className="text-blue-600 hover:underline font-medium">
              0161 223 7281
            </a>{' '}
            or
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-lg  transition-colors duration-300 font-medium shadow-md hover:shadow-lg text-lg"
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