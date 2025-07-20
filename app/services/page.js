"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Sub-component: Contact Form
const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  // Animation variants for form inputs
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/3 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl p-8"
      role="form"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="text-3xl font-bold text-[#374B5B] mb-6 text-center relative">
        Get a Quote
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <motion.div variants={inputVariants}>
          <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
            placeholder="Enter your name"
            required
            aria-required="true"
          />
        </motion.div>
        <motion.div variants={inputVariants}>
          <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
            placeholder="Enter your email"
            required
            aria-required="true"
          />
        </motion.div>
        <motion.div variants={inputVariants}>
          <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="subject">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
            placeholder="Subject"
            required
            aria-required="true"
          />
        </motion.div>
        <motion.div variants={inputVariants}>
          <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="phone">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
            placeholder="Enter your phone"
            required
            aria-required="true"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            type="submit"
            className="w-full bg-[#FF0600] text-white py-4 rounded-lg hover:bg-[#CC0500] transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

// Sub-component: Service Card with Image
const ServiceCard = ({ title, subtitle, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      <div className="relative">
        <img
          src={image}
          alt={`${title} service`}
          className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#374B5B]/60 flex items-center justify-center rounded-t-xl"
        >
          <p className="text-white text-lg font-semibold text-center px-4">{subtitle}</p>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#374B5B] mb-2 group-hover:text-[#FF0600] transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
};

// Sub-component: Process Card
const ProcessCard = ({ title, description, index }) => {
  return (
    <div className="relative flex flex-col items-center h-full">
      {/* Circular connector - only show for first two cards */}
      {index < 2 && (
        <div className="hidden md:block absolute top-1/2 left-3/4 w-1/2 h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full"
          >
            <path
              d={index === 0 ? "M0,50 Q50,100 100,50" : "M0,50 Q50,0 100,50"}
              fill="none"
              stroke="#FF0600"
              strokeWidth="2"
              strokeDasharray="0"
            />
          </svg>
        </div>
      )}
      {/* Process card content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#FF0600] w-full h-full z-10"
      >
        <h3 className="text-xl font-semibold text-[#374B5B] mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

// Sub-component: Testimonial Slider
const TestimonialSlider = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <h2 className="text-4xl font-bold text-[#374B5B] mb-8 text-center relative">
        What Our Clients Say
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-23 rounded-xl shadow-lg max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 italic mb-4 text-lg">{testimonials[current].quote}</p>
          <p className="text-[#374B5B] font-semibold">{testimonials[current].author}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-[#FF0600]' : 'bg-[#374B5B]/50'
            } transition-colors duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={current === index}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Sub-component: FAQ Accordion
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of security services does MAK Security offer?",
      answer:
        "We provide a wide range of services, including Manned Guarding, Event Security, Key Holding, Facility Management, Car Park Management, Concrete Block Hire, and CCTV solutions.",
    },
    {
      question: "How quickly can you deploy security services?",
      answer:
        "We offer rapid deployment, with our team ready to conduct site visits and implement services at short notice to meet your urgent security needs.",
    },
    {
      question: "Are your services available outside Manchester?",
      answer:
        "Yes, we serve clients across the UK, including Manchester, Liverpool, London, Birmingham, and the North West, with tailored security solutions.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <h2 className="text-4xl font-bold text-[#374B5B] mb-8 text-center relative">
        Frequently Asked Questions
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              className="w-full text-left py-4 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-semibold text-[#374B5B]">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Sub-component: Stats Section
const StatsSection = () => {
  const stats = [
    { label: 'Years of Experience', value: '30+' },
    { label: 'Clients Served', value: '500+' },
    { label: 'Security Guards', value: '200+' },
    { label: 'Cities Covered', value: '5+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-24 bg-[#374B5B] text-white py-16 rounded-2xl"
    >
      <h2 className="text-4xl font-bold mb-8 text-center relative">
        Our Impact
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-4xl font-bold text-[#FF0600] mb-2">{stat.value}</p>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Component: Services Page
export default function Services() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
  });

  // Sticky CTA state
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // References for scrolling
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

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

  // Handle scroll to services section
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Services list with standardized image paths
  const services = [
    {
      title: 'Manned Guarding',
      subtitle: 'MANNED GUARDING',
      image: '/services/manned-guarding.png',
    },
    {
      title: 'Event Security',
      subtitle: 'EVENT SECURITY',
      image: '/services/event-security.png',
    },
    {
      title: 'Key Holding',
      subtitle: 'KEY HOLDING & ALARM RESPONSE',
      image: '/services/key-holding.png',
    },
    {
      title: 'Facility Management',
      subtitle: 'FACILITY MANAGEMENT',
      image: '/services/facility-management.png',
    },
    {
      title: 'Car Park Management',
      subtitle: 'CAR PARK MANAGEMENT',
      image: '/services/car-park-management.png',
    },
    {
      title: 'Concrete Block Hire',
      subtitle: 'CONCRETE BLOCK HIRE',
      image: '/services/Concrete_Block-Hire.png',
    },
    {
      title: 'CCTV',
      subtitle: 'CCTV',
      image: '/services/cctv.png',
    },
  ];

  // Testimonials list
  const testimonials = [
    {
      quote: "MAK Security's services are unparalleled. Their team ensures our events run smoothly and safely.",
      author: "Emma Wilson, Event Planner",
    },
    {
      quote: "Their professional approach to facility management has saved us time and resources.",
      author: "James Carter, Facility Manager",
    },
    {
      quote: "The CCTV solutions provided by MAK Security are top-notch, offering us complete peace of mind.",
      author: "Laura Thompson, Retail Owner",
    },
  ];

  // Process steps
  const processSteps = [
    {
      title: '#1 Site Visit',
      description:
        'Request a free no obligation quotation. We will complete a full site survey, risk assessment, and discuss your security requirements.',
    },
    {
      title: '#2 Service Delivery',
      description:
        'Complete the installation (CCTV or patrol systems) or onsite training (manned guarding/mobile services) before deployment.',
    },
    {
      title: '#3 Friendly Support',
      description:
        'Throughout the process of service delivery or deployment, a dedicated account manager will be assigned to you and will be readily available 24/7.',
    },
  ];

  // Certifications
const certifications = [
 { name: 'ICO', logo: '/services/ICO-logo.png' },
        { name: 'SIA', logo: '/services/SIA-Logo.png' },
        { name: 'ISOQAR', logo: '/services/ISOQAR-Logo.png' },
        { name: 'NASDU', logo: '/services/NASDU-logo.png' },
        { name: 'SafeContractor', logo: '/services/Safe-Contractor.png' },
        { name: 'LS', logo: '/services/LS-Logo.png' },
];
  return (
    <section className="bg-[#F7F7F7] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto">
        {/* Header with Full-Screen Background Image and Form */}
        <motion.div
          ref={headerRef}
          style={{
            y,
            backgroundImage: "url('/services/Mak_Security_Services.jpeg')", // Ensure this image exists
          }}
          className="relative min-h-screen w-full bg-cover bg-center rounded-3xl shadow-2xl mb-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#374B5B]/80 to-[#FF0600]/20 rounded-3xl"></div>
          <div className="relative container mx-auto px-6 py-20 h-full flex flex-col lg:flex-row items-center justify-between">
            {/* Header Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 mb-12 lg:mb-0"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight relative">
                Comprehensive Security Services
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#FF0600] rounded"></span>
              </h1>
              <p className="text-xl text-white max-w-lg mb-8 leading-relaxed">
                MAK Security offers a full range of professional security solutions across Manchester, Liverpool, London, Birmingham, and the North West, ensuring safety and peace of mind for your business and properties.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#FF0600] text-white py-3 px-8 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button onClick={scrollToServices}>Learn More</button>
              </motion.div>
            </motion.div>
            {/* Contact Form */}
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </motion.div>

        {/* Services Section with Images */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-[#374B5B] mb-8 text-center relative">
            Our Range Of Security Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold text-[#374B5B] mb-8 text-center relative">
            Our Process
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF0600] rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={index}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <TestimonialSlider testimonials={testimonials} />

        {/* FAQ Accordion */}
        <FAQAccordion />

        {/* Stats Section */}
        <StatsSection />

     {/* Certifications Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-24 px-4 sm:px-6 lg:px-8"
>
  <h2 className="text-4xl font-bold text-[#374B5B] mb-8 text-center relative">
    Our Certifications
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
  </h2>
  <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto text-lg">
    MAK Integrated Services holds SIA-approved contractor status for Security Guarding and Key Holding Services. ISO Cert No.7971.
  </p>
  <div className="flex flex-wrap justify-center gap-8">
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white h-28 w-40 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      >
        <img 
          src={cert.logo} 
          alt={`${cert.name} Certification`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-[#374B5B] mb-6 relative">
            Contact Us
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF0600] rounded"></span>
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Call us at{' '}
            <a href="tel:01612237281" className="text-[#374B5B] hover:text-[#FF0600] hover:underline font-medium">
              0161 223 7281
            </a>{' '}
            or
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-lg hover:bg-[#CC0500] transition-colors duration-300 font-semibold shadow-md hover:shadow-lg text-lg"
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
              className="fixed bottom-8 right-8 z-50"
            >
              <Link
                href="/contact"
                className="bg-[#FF0600] text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <svg
                  className="w-6 h-6 mr-3"
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
