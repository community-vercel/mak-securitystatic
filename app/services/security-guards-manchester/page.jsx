"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Custom CSS for glow and text shadow effects
const customStyles = `
  .shadow-glow {
    box-shadow: 0 0 15px rgba(255, 6, 0, 0.5);
  }
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

// Sub-component: Contact Form
const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/3 bg-gradient-to-b from-white to-gray-50 shadow-2xl rounded-xl p-8"
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
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
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
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
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
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
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
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
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
            className="w-full bg-[#FF0600] text-white py-4 rounded-xl hover:bg-[#CC0500] transition-colors duration-300 font-semibold shadow-md hover:shadow-glow"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

// Sub-component: Service Card with Image
const ServiceItem = ({ title, index, isLastInRow }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex items-center w-full md:w-1/3 px-4 py-4"
    >
      <span className="text-lg font-semibold text-[#374B5B] hover:text-[#FF0600] transition-colors duration-300">
        {title}
      </span>
      {/* Connecting line to the next item (not shown for the last item in each row) */}
      {/* {!isLastInRow && (
        <div className=" md:block absolute top-1/2 right-0 w-12 h-12">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full"
          >
            <path
              d="M0,50 H100"
              fill="none"
              stroke="#FF0600"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      )} */}
    </motion.li>
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
      className="mb-32"
    >
      <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
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
          className="bg-gradient-to-r from-white to-gray-100 p-22 rounded-xl shadow-lg max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 italic mb-4 text-lg leading-relaxed">"{testimonials[current].quote}"</p>
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
            className={`w-4 h-4 rounded-full ${
              current === index ? 'bg-[#FF0600] ring-2 ring-[#FF0600]' : 'bg-[#374B5B]/50'
            } transition-colors duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={current === index}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Sub-component: Certifications Section
const CertificationsSection = () => {
const certifications = [
 { name: 'ICO', logo: '/services/ICO-logo.png' },
        { name: 'SIA', logo: '/services/SIA-Logo.png' },
        { name: 'ISOQAR', logo: '/services/ISOQAR-Logo.png' },
        { name: 'NASDU', logo: '/services/NASDU-logo.png' },
        { name: 'SafeContractor', logo: '/services/Safe-Contractor.png' },
        { name: 'LS', logo: '/services/LS-Logo.png' },
];
  return (
   <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
        Our Certifications
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto text-lg leading-relaxed">
        MAK Integrated Services holds SIA-approved contractor status for Security Guarding and Key Holding Services. ISO Cert No.7971.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#E5E7EB] h-24 w-32 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <img
              src={cert.logo} // Use static logo path
              alt={`${cert.name} certification logo`}
              className="w-full h-full object-contain p-2 bg-white"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Component: Security Guards Manchester Page
export default function SecurityGuardsManchester() {
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
  const businessSecurityRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);

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

  // Handle scroll to business security section
  const scrollToBusinessSecurity = () => {
    businessSecurityRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Services list
const services = [
  'Commercial Guarding',
  'Construction Guarding',
  'Retail Guarding',
  'Site Evictions',
  'Car Park Management',
  'Dynamic Guarding Services',
  'Event Security',
  'Concierge Security',
  'Key Holding Services',
  'Trespass Management',
  'Residential Guarding',
  'Vacant Property Guarding',
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

  return (
    <>
      <style>{customStyles}</style>
      <section className="bg-[#F7F7F7] py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="container mx-auto">
          {/* Hero Section */}
          <motion.div
            ref={headerRef}
            style={{
              y,
              backgroundImage: "url('/services/Mak-Security-Van-768x528.jpeg')", 
            }}
            className="relative min-h-screen w-full bg-cover bg-center rounded-3xl shadow-2xl mb-45 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#374B5B]/90 to-[#FF0600]/30 rounded-3xl"></div>
            <div className="relative container mx-auto px-6 py-20 h-full flex flex-col lg:flex-row items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 mb-12 lg:mb-0"
              >
                <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight relative text-shadow-md">
                  Security Guards Manchester
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#FF0600] rounded"></span>
                </h1>
                <p className="text-xl text-white max-w-lg mb-8 leading-relaxed">
                  Protect your Manchester property with MAK Security's 24/7 trained guards, deterring theft and vandalism.
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-xl font-bold shadow-md hover:shadow-glow transition-all duration-300"
                >
                  <button onClick={scrollToBusinessSecurity}>Learn More</button>
                </motion.div>
              </motion.div>
              <ContactForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </motion.div>

          {/* Why Choose MAK Security Guards Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-32 mt-10"
>
  <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
    Why Choose MAK Security Guards in Manchester?
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
  </h2>
  
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
    {/* Image on left - visible on medium screens and up */}
    <div className="md:w-1/3">
      <img 
        src="/services/Security-Guard.jpg" 
        alt="MAK Security Guard in Manchester"
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
    </div>
    
    {/* Paragraph on right */}
    <div className="md:w-2/3">
      <p className="text-gray-600 text-lg leading-relaxed">
        Damage sustained due to burglary or vandalism in Manchester has caused a great financial and emotional impact. We at MAK Security Manchester understand this, which is why our security services offer highly trained security guards to provide a visual deterrent against theft and vandalism, even if your property is covered by CCTV security. A physical presence ensures quick and appropriate reactions to threatening situations, deterring offenders effectively. Due to decreased UK policing funding, response times have increased, leading to a rise in manned guarding across the country, including Manchester, Birmingham, Liverpool, and the North West.
      </p>
    </div>
  </div>
</motion.div>

          {/* Manchester Business Security Section */}
         <motion.div
      ref={businessSecurityRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
        Manchester Business Security
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto text-lg leading-relaxed">
        With our flexibility and skill set, MAK can offer services such as concierge, receptionist, and caretaker roles in addition to dual-role officers that provide value-added services. We tailor our manned security to suit a wide range of bespoke needs.
      </p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto place-items-center">
  {services.map((service, index) => (
    <li key={index} className="w-full flex justify-center">
      <ServiceItem
        title={service}
        index={index}
      />
    </li>
  ))}
</ul>
    </motion.div>

          {/* Event Security Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Event Security Manchester
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              As one of Manchester's leading security companies, we provide skilled, professional, and experienced Security Guards who are fully trained to attend a variety of manned guarding assignments, emergencies, or other requirements.
            </p>
          </motion.div>

          {/* Guard Personnel Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Mak Security Guard Personnel
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              All officers are SIA licensed, vetted to BS7858, and cleared by the Home Office for criminal convictions. They have completed job-specific training and are trained by our SIA level 3 trainer and in-house training manager with over 30 years of front-line experience working for the Greater Manchester Police.
            </p>
          </motion.div>

          {/* Ethos Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Our Ethos
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Our security guarding officers take a proactive and professional approach with all clients. We train them from day one to go the extra mile, whether for door supervision at your licensed club or bar, or implementing a loss prevention scheme at your shopping centre.
            </p>
          </motion.div>

          {/* Property Guarding Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Property Guarding
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Unoccupied properties often attract vandals, criminals, trespassers, and unauthorized visitors, leading to costly repairs and legal frustrations. MAK Security offers manned guarding services and periodic Void Property Inspections (VPI) to combat these issues, with a team of Court Enforcement Specialists available for rapid deployment.
            </p>
          </motion.div>

          {/* Key Holding Services Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Key Holding Services Manchester
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              MAK Security provides reliable key holding services for domestic and commercial clients. Our fully trained and vetted officers arrive promptly, ensuring the safety of your property. We secure your keys in a local key vault or mobile unit, accessible only to authorized personnel.
            </p>
          </motion.div>

          {/* Testimonial Slider */}
          <TestimonialSlider testimonials={testimonials} />

          {/* Certifications Section */}
          <CertificationsSection />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Call us at{' '}
              <a href="tel:01612237281" className="text-[#374B5B] hover:text-[#FF0600] hover:underline font-medium">
                0161 223 7281
              </a>{' '}
              or
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-xl hover:bg-[#CC0500] transition-colors duration-300 font-bold shadow-md hover:shadow-glow text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Blog Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4"
          >
            <Link
              href="/blog/social-distancing-queues"
              className="bg-white p-4 rounded-lg shadow-sm text-[#374B5B] hover:text-[#FF0600] font-medium transition-colors duration-300"
            >
              ← Previous Post: Guidance On Hiring Staff To Manage Social Distancing Queues
            </Link>
            <Link
              href="/blog/key-holding-greater-manchester"
              className="bg-white p-4 rounded-lg shadow-sm text-[#374B5B] hover:text-[#FF0600] font-medium transition-colors duration-300"
            >
              Next Post: Key Holding Services Greater Manchester →
            </Link>
          </motion.div>

          {/* Sticky CTA Button */}
          <AnimatePresence>
            {isStickyVisible && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed bottom-8 right-8 z-50 animate-pulse"
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#FF0600] to-[#CC0500] text-white py-4 px-8 rounded-full font-bold shadow-lg hover:shadow-glow transition-all duration-300 flex items-center"
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
    </>
  );
}
