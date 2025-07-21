"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ContactForm from './../../../components/MobileSecurity/ContactForm';
import CertificationsSection from './../../../components/MobileSecurity/CertificationsSection';
import TestimonialSlider from '@/components/TestimonalSlider';
import SimpleContactForm from './../../../components/MobileSecurity/ContactForm';

// Custom CSS for glow and text shadow effects
const customStyles = `
  .shadow-glow {
    box-shadow: 0 0 15px rgba(255, 6, 0, 0.5);
  }
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

// Sub-component: How It Works Item
const HowItWorksItem = ({ title, description, index }) => {
  const icons = [
    <svg key="search-icon" className="w-12 h-12 text-[#FF0600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>,
    <svg key="megaphone-icon" className="w-12 h-12 text-[#FF0600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 0H5a2 2 0 01-2-2V6a2 2 0 012-2h4m6 0H9m6 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" />
    </svg>,
    <svg key="phone-icon" className="w-12 h-12 text-[#FF0600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 w-full md:w-auto"
    >
      <div className="mb-4">{icons[index]}</div>
      <h3 className="text-xl font-semibold text-[#374B5B] mb-2">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Sub-component: Benefit Item
const BenefitItem = ({ title, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center w-full md:w-1/3 px-4 py-4"
    >
      <span className="text-lg font-semibold text-[#374B5B] hover:text-[#FF0600] transition-colors duration-300">
        {title}
      </span>
    </motion.li>
  );
};

// Main Component: Mobile Security Bolton Page
export default function MobileSecurityBolton() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    businessName: '',
    postCode: '',
    message: ''
  });
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const headerRef = useRef(null);
  const benefitsRef = useRef(null);
  const formRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBenefits = () => {
    benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    document.documentElement.style.overflowX = 'auto';
  };

  const benefits = [
    'SIA Approved security personnel',
    'Nationwide security patrols available',
    'Fully marked security patrol vehicles',
    'Rapid response times',
    '24hr availability',
  ];

  const howItWorks = [
    {
      title: 'Site Visit',
      description: 'Request a free no obligation quotation. We will be happy to complete a full site survey, risk assessment and discuss all your security requirements in Bolton.',
    },
    {
      title: 'Service Delivery',
      description: 'Complete the installation (CCTV or patrol systems) or onsite training (manned guarding/mobile services) before deployment.',
    },
    {
      title: 'Friendly Support',
      description: 'Throughout the process of service delivery or deployment, a dedicated account manager will be assigned to you and be readily available 24/7 and 365 days a year.',
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
              backgroundImage: "url('/services/Mak-Security-Mobile.jpeg')",
            }}
            className="relative min-h-[70vh] w-full bg-cover bg-center rounded-3xl shadow-2xl mb-32 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#374B5B]/90 to-[#FF0600]/30 rounded-3xl"></div>
            <div className="relative container mx-auto px-6 py-20 h-full flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight relative text-shadow-md">
                  Mobile Security Bolton
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF0600] rounded"></span>
                </h1>
                <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                  Protection for your business with Mak Security mobile security patrols and rapid response units.
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-xl font-bold shadow-md hover:shadow-glow transition-all duration-300"
                >
                  <button onClick={scrollToBenefits}>Learn More</button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Why Choose MAK Security Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 relative">
                  Mak Security - Mobile Security Patrols Bolton
                  <span className="absolute bottom-0 left-0 w-32 h-1 bg-[#FF0600] rounded"></span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Are you looking for a reliable mobile security patrol service in the Bolton area? Mak Security is an established security company based in Bolton, we have been providing mobile security patrol services to businesses in Bolton and across the UK for over 30 years. From large open areas such as educational facilities or more vulnerable locations such as warehouses and shipyards, our fully regulated, SIA-licensed mobile security patrol guards will deliver extensive coverage to maintain a total security solution throughout. MAK is one of the most well-established security companies in Bolton. As SIA approved security experts we offer a wide range of services which cover the Bolton area including manned guarding, key holding, CCTV, event security, facility management, car park management, secure concrete block and an extensive court enforcement service. If you are looking for a dedicated, faithful and motivated security company in Bolton that will provide a fast response to security breaches and protect all areas of your business, call to Mak Security today.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src="/services/Mak_Security_Mobile.jpeg"
                  alt="MAK Security Patrol in Bolton"
                  className="w-full h-72 rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              How MAK Security Works
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <HowItWorksItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Mobile Security Patrol Benefits Section */}
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Mobile Security Patrol in Bolton Benefits
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.slice(0, 3).map((benefit, index) => (
                <BenefitItem
                  key={index}
                  title={benefit}
                  index={index}
                />
              ))}
            </ul>
          </motion.div>

          {/* Hire a Mobile Security Patrol in Bolton Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              Hire a Mobile Security Patrol in Bolton
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <img
                  src="/services/images 3.jpg"
                  alt="Mobile security patrol in Bolton"
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <div className="w-full lg:w-1/2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mak Security have the ability to operate simultaneously over multiple locations and provide services such as internal security and external mobile security patrols in Bolton, our mobile security patrols can deploy a security solution that operates over more than one specific location at any given time. At Mak Security, we know that being visible is vital to operational success, so you can rely on us to provide fully uniformed mobile security personnel and fully marked security patrol vehicles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* High Level of Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
              High Level of Experience
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              MAK offers a high level of professional mobile security patrols in the Bolton area, boasting an experienced management and support infrastructure team with more than 50 years of experience in the Security Industry and over 30 years experience in the Greater Manchester Police.
            </p>
          </motion.div>

          {/* Google Reviews Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 relative">
              5 Star Reviews on Google
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Check out our 5-star reviews on Google to see why our clients trust MAK Security for their mobile security needs.
            </p>
            <motion.div>
              <a
                href="https://www.google.com/search?biw=1455&bih=644&ei=WfBLXYjcJcWD8gKqopmgBw&q=mak+security+liverpool&oq=mak+security+liverpool&gs_l=psy-ab.3...7503.8861..9086...0.0..0.148.996.1j8......0....1..gws-wiz.......35i39j0i22i30j33i160j33i21.zmo8jsiu9fM&ved=&uact=5#lrd=0x487bb688def97a11:0xf079ea3499a1387b,1,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF0600] text-white py-4 px-10 rounded-xl hover:bg-[#CC0500] transition-colors duration-300 font-bold shadow-md hover:shadow-glow text-lg"
              >
                View Google Reviews
              </a>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <CertificationsSection />
          <TestimonialSlider />

          {/* Combined Contact Section - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
              {/* Left Side - Contact Form (takes 2/3 width on large screens) */}
              <div className="w-full lg:w-2/3">
                <SimpleContactForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  formRef={formRef}
                />
              </div>

              {/* Right Side - Contact Info (takes 1/3 width on large screens) */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start">
                <h2 className="text-4xl font-semibold text-[#374B5B] mb-6 relative text-center lg:text-left w-full">
                  Contact Us
                  <span className="absolute bottom-0 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-[#FF0600] rounded"></span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed text-center lg:text-left">
                  Call us at{' '}
                  <a href="tel:01612237281" className="text-[#374B5B] hover:text-[#FF0600] hover:underline font-medium">
                    0161 223 7281
                  </a>{' '}
                  or
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="/contact"
                    className="bg-[#FF0600] text-white py-4 px-10 rounded-xl hover:bg-[#CC0500] transition-colors duration-300 font-bold shadow-md hover:shadow-glow text-lg w-full lg:w-auto"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </div>
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
                <button
                  onClick={scrollToContact}
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
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}