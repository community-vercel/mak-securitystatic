'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/ContactForm';
import TestimonialSlider from '@/components/TestimonalSlider';

// Area Card Component
const AreaCard = ({ area, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={area.image} // Use static image path from area object
          alt={`${area.name} Security Services`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
      <p className="text-gray-600 mb-4">{area.description}</p>
      <Link
        href={area.href}
        className="text-[#FF0600] hover:underline font-medium"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

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
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function AreasCoveredPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
  });
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Integrate with API route in a real app
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const areas = [
    {
      name: 'Manchester',
      href: '/areas-covered/manchester',
      description: 'Comprehensive security solutions across Manchester, including manned guarding, CCTV, key holding, and court enforcement for areas like Blackley, Hulme, and Wythenshawe.',
      subAreas: 'Blackley, Cheetham Hill, Chorlton-cum-Hardy, Didsbury, Hulme, Moss Side, Wythenshawe, Longsight',
      image: '/services/Manchester.jpg', // Static image path
    },
    {
      name: 'Merseyside',
      href: '/areas-covered/merseyside',
      description: 'Comprehensive security for Merseyside, including Liverpool, Halton, Knowsley, Sefton, and Wirral, with event security and court enforcement.',
      subAreas: 'Liverpool, Halton, Knowsley, Sefton, Wirral, Wallasey, Heswall',
      image: '/services/Merseyside.jpg', // Static image path
    },
    {
      name: 'Lancashire',
      href: '/areas-covered/lancashire',
      description: 'Offering a full range of security solutions in Lancashire, including Blackburn, Blackpool, Burnley, and Chorley, with mobile patrols and CCTV.',
      subAreas: 'Blackburn, Blackpool, Burnley, Chorley, Lancaster, Ormskirk',
      image: '/services/Lancashire.jpg', // Static image path
    },
    {
      name: 'Cheshire',
      href: '/areas-covered/cheshire',
      description: 'Delivering advanced CCTV, facility management, and court enforcement solutions for businesses in Cheshire, covering areas like Chester, Warrington, and Crewe.',
      subAreas: 'Chester, Warrington, Crewe, Macclesfield, Nantwich',
      image: '/services/Cheshire.jpg', // Static image path
    },
    {
      name: 'Staffordshire',
      href: '/areas-covered/staffordshire',
      description: 'Providing professional security services, including manned guarding and mobile patrols, across Staffordshire, covering areas like Stafford, Stoke-on-Trent, and Lichfield.',
      subAreas: 'Stafford, Stoke-on-Trent, Lichfield, Tamworth, Cannock',
      image: '/services/Staffordshire.jpg', // Static image path
    },
  ];

  const processSteps = [
    {
      title: '1. Site Visit',
      description:
        'Request a free, no-obligation quotation. We complete a full site survey, risk assessment, and discuss your security requirements tailored to your area.',
    },
    {
      title: '2. Service Delivery',
      description:
        'Complete the installation of CCTV, concrete blocks, or patrol systems, or provide onsite training for manned guarding before deployment.',
    },
    {
      title: '3. Friendly Support',
      description:
        'A dedicated account manager is assigned to you, available 24/7 to ensure ongoing satisfaction and support across all service areas.',
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto max-w-8xl">
        {/* Breadcrumb */}
        <nav className="py-4 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> &gt; <span>Areas Covered</span>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] w-full mb-12 rounded-3xl shadow-2xl overflow-hidden"
        >
          <Image
            src="/services/images.jpg"
            alt="MAK Security Areas Covered"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 to-red-300/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas Covered</h1>
              <p className="text-xl max-w-2xl mx-auto">
                MAK Security provides expert security solutions across Manchester, Merseyside, Lancashire, Cheshire, and Staffordshire, with SIA-licensed officers and 24/7 support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Areas List */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              From Manchester to Staffordshire, MAK Security delivers tailored security services, including manned guarding, CCTV, key holding, and court enforcement.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <AreaCard key={index} area={area} index={index} />
            ))}
          </div>
        </section>

        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/services/Facility_Management-Company.jpg"
              alt="MAK Security service process"
              width={1200}
              height={800}
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

        {/* Why Choose MAK Security */}
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
                Why Choose MAK Security?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-blue-100 max-w-3xl mx-auto"
              >
                With bases in Manchester, Liverpool, and Birmingham, MAK Security delivers professional, SIA-approved security solutions across the UK, backed by over 50 years of industry experience.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <ul className="space-y-3">
                  {[
                    'SIA-approved contractor since 2009',
                    'Management with 30+ years of Greater Manchester Police experience',
                    'Nationwide coverage with rapid response',
                    '24/7 manned control room with GPS tracking',
                    'Tailored solutions for each area’s unique needs',
                    'Comprehensive services including court enforcement and concrete block hire',
                  ].map((reason, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2" />
                      <span className="text-blue-100">{reason}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/about"
                    className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Learn More About Us
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services/staffordshire.jpg"
                    alt="MAK Security team"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Our Expert Team</h3>
                    <p className="text-blue-100">Serving the UK with professionalism</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </section>

        {/* Testimonial Slider */}
        <TestimonialSlider />

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
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Our Certifications
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                MAK Integrated Services holds SIA-approved contractor status for Security Guarding and Key Holding Services, and is ISO9001 registered.
                <span className="block mt-2 text-red-500 font-medium">ISO Cert No.7971</span>
              </motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { name: "ICO", image: "/services/ICO-logo.png" },
                { name: "SIA", image: "/services/SIA-Logo.png" },
                { name: "ISOQAR", image: "/services/ISOQAR-Logo.png" },
                { name: "NASDU", image: "/services/NASDU-logo.png" },
                { name: "SafeContractor", image: "/services/Safe-Contractor.png" },
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
          className="text-center py-12 bg-[#FF0600] text-white"
        >
          <h3 className="text-2xl font-semibold mb-2">Secure Your Area Today</h3>
          <p className="text-3xl font-bold mb-4">0161 223 7281</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-[#374B5B] text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
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
                <MapPinIcon className="w-6 h-6 mr-2" />
                Get a Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}