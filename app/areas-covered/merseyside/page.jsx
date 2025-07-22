'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldCheckIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/contactus';
import TestimonialSlider from '@/components/TestimonalSlider';

// Reusable Card Component
const Card = ({ children, className, initial, whileInView, transition }) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    transition={transition}
    viewport={{ once: true }}
    className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 ${className}`}
  >
    {children}
  </motion.div>
);

// Service Item Component
const ServiceItem = ({ service, index }) => (
  <Card
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.2, ease: 'easeOut' }}
    className="text-center text-gray-700 font-medium bg-blue-50 hover:bg-blue-100"
  >
    {service}
  </Card>
);

// Process Card Component
const ProcessCard = ({ title, description, index }) => (
  <Card
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.3, ease: 'easeOut' }}
    className="bg-white/90 backdrop-blur-sm"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </Card>
);

// Sub-Area Card Component
const SubAreaCard = ({ subArea, index }) => (
  <Card
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
    className="text-center"
  >
    <h3 className="text-xl font-semibold text-red-500 mb-2">{subArea.name} ({subArea.postcode})</h3>
    <p className="text-gray-600 leading-relaxed">{subArea.areas}</p>
  </Card>
);

export default function SecurityServicesMerseyside() {
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

  const services = [
    'Manned Guarding',
    'Key Holding & Alarm Response',
    'CCTV Installation & Monitoring',
    'Event Security',
    'Facility Management',
    'Car Park Management',
    'Concrete Block Hire',
    'Court Enforcement Services',
  ];

  const subAreas = [
    { name: 'Liverpool', postcode: 'L1 0AA', areas: 'Anfield, Everton, Kirkdale, Vauxhall, Walton' },
    { name: 'Wirral', postcode: 'CH41 2XX', areas: 'Birkenhead, Wallasey, Bebington, Heswall, West Kirby' },
    { name: 'Sefton', postcode: 'PR8 1AA', areas: 'Southport, Bootle, Crosby, Formby, Maghull' },
    { name: 'Knowsley', postcode: 'L34 1PJ', areas: 'Huyton, Kirkby, Prescot, Halewood, Whiston' },
    { name: 'St Helens', postcode: 'WA10 1UA', areas: 'Haydock, Newton-le-Willows, Rainford, Billinge, Eccleston' },
  ];

  const processSteps = [
    {
      title: '1. Site Visit',
      description: 'Request a free, no-obligation quotation. We complete a full site survey, risk assessment, and discuss your security requirements tailored to Merseyside.',
    },
    {
      title: '2. Service Delivery',
      description: 'Complete the installation of CCTV, concrete blocks, or patrol systems, or provide onsite training for manned guarding before deployment.',
    },
    {
      title: '3. Friendly Support',
      description: 'A dedicated account manager is assigned to you, available 24/7 to ensure ongoing satisfaction and support across Merseyside.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto max-w-9xl">
        {/* Breadcrumb */}
        <nav className="py-4 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
            Home
          </Link>{' '}
         &gt;{' '}
          <Link href="/areas-covered" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
            Areas Covered
          </Link>{' '}
         &gt; <span>Merseyside</span>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[400px] md:min-h-[500px] w-full mb-12 rounded-3xl shadow-2xl overflow-hidden"
        >
          <Image
            src="/services/merseyside-security.jpg"
            alt="Security Services in Merseyside"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 to-red-300/60 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">
                Merseyside Security Services
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                Expert commercial and domestic security solutions across Merseyside, with SIA-approved services from our Audenshaw, Manchester office.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Overview */}
        <section className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Expert Security Solutions in Merseyside
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              MAK Security, based in Audenshaw, Manchester, delivers comprehensive security services across Merseyside, including manned guarding, CCTV, key holding, event security, and concrete block hire.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} index={index} />
            ))}
          </div>
        </section>

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
                MAK Security is one of the most established security companies in Merseyside, offering SIA-approved services with over 50 years of security industry experience and 30 years with Greater Manchester Police.
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
                    'Management with 30+ years of police experience',
                    'Nationwide delivery from Manchester, Liverpool, Birmingham',
                    '24/7 manned control room with GPS tracking',
                    'Pre-start shift check calls and real-time incident reports',
                    'Rapid response for court enforcement and evictions',
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
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl">
                    Learn More About Us
                  </button>
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
                    src="/services/Supervisor-security.jpg"
                    alt="MAK Security team in Merseyside"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-blue-100">Professional security solutions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Sub-Areas Section */}
        <section className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Areas We Cover Around Merseyside
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive security services across Merseyside, including Liverpool, Wirral, Sefton, Knowsley, and St Helens, ensuring a safe and secure environment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {subAreas.map((subArea, index) => (
              <SubAreaCard key={index} subArea={subArea} index={index} />
            ))}
          </div>
        </section>

        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative py-20 mb-20 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/services/Concrete_Block_Hire.jpg"
              alt="Concrete block hire process"
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

        {/* Testimonial Slider */}
        <section className="py-12 sm:py-16">
          <TestimonialSlider />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-base md:text-lg text-gray-600 mt-2">5 Star Reviews on Google</p>
            <Link
              href="https://www.google.com"
              className="mt-4 inline-block text-red-600 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View Our Google Reviews
            </Link>
          </motion.div>
        </section>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Our Certifications
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                MAK Integrated Services holds SIA-approved contractor status for Security Guarding and Key Holding Services, and is ISO900 {
                  <span className="block mt-2 text-red-500 font-medium">ISO Cert No. 7971</span>
                }
              </motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
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
                  transition={{ duration: 0.4, delay: index * 0.2, ease: 'easeOut' }}
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
          className="text-center py-12 sm:py-16 bg-red-600 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">Secure Merseyside Today</h3>
          <p className="text-3xl md:text-4xl font-bold mb-4">0161 223 7281</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
            >
              <Link
                href="/contact"
                className="bg-red-600 text-white py-3 px-6 rounded-full font-medium shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center"
              >
                <ShieldCheckIcon className="w-6 h-6 mr-2" />
                Get a Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}