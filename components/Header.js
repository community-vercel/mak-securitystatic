// app/components/Header.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    subLinks: [
      {
        name: 'Manned Guarding',
        href: '/services/manned-guarding',
        subServices: [
          { name: 'Security Guards Manchester', href: '/services/security-guards-manchester' },
        ],
      },
      {
        name: 'Security Guards',
        href: '/services/security-guards',
        subServices: [
          { name: 'Security Guards Manchester', href: '/services/security-guards-manchester' },
          { name: 'Security Guards Liverpool', href: '/services/security-guards-liverpool' },

        ],
      },
      {
        name: 'Key Holding Services',
        href: '/services/key-holding',
        subServices: [
          { name: 'KEY HOLDING SECURITY MANCHESTER', href: '/services/key-holding-security-manchester' },
          { name: 'COMMERCIAL KEY HOLDING MANCHESTER', href: '/services/commercial-key-holding-manchester' },
          { name: 'KEY HOLDING SERVICES LIVERPOOL', href: '/services/key-holding-services-liverpool' },
          { name: 'KEY HOLDING SERVICES MANCHESTER', href: '/services/key-holding-services-manchester' },
          { name: 'KEY HOLDING SERVICES STOKE', href: '/services/key-holding-services-stoke' },
          { name: 'COMMERCIAL KEY HOLDING', href: '/services/commercial-key-holding' },
          { name: 'HOME KEY HOLDING MANCHESTER', href: '/services/home-key-holding-manchester' },




        ],
      },
      {
        name: 'CCTV Security',
        href: '/services/cctv',
        // subServices: [
        //   { name: 'AI-Powered CCTV', href: '/services/cctv/ai-powered' },
        //   { name: 'Remote Monitoring', href: '/services/cctv/remote-monitoring' },
        //   { name: ' CCTV Installation', href: '/services/cctv/installation' },
        // ],
      },
      {
        name: 'Event Security',
        href: '/services/event-security',
        subServices: [
          { name: 'Event Security Manchester', href: '/services/event-security-manchester' },
         
        ],
      },
      {
        name: 'Mobile Security',
        href: '#',
        subServices: [
          { name: 'MOBILE SECURITY MANCHESTER', href: '/services/mobile-security-manchester' },
          { name: 'MOBILE SECURITY STOCKPORT', href: '/services/mobile-security-stockport' },
          { name: 'MOBILE SECURITY OLDHAM', href: '/services/mobile-security-oldham' },
          { name: 'MOBILE SECURITY BOLTON', href: '/services/mobile-security-bolton' },
          { name: 'MOBILE SECURITY AINTREE', href: '/services/mobile-security-aintree' },
          { name: 'MOBILE SECURITY BIRKENHEAD', href: '/services/mobile-security-birkenhead' },
          { name: 'MOBILE SECURITY KNOWSLEY', href: '/services/mobile-security-knowsley' },
          { name: 'MOBILE SECURITY LIVERPOOL', href: '/services/mobile-security-liverpool' },



        ],
      },
      
      {
        name: 'Facility Management',
        href: '/services/facility-management',
       
      },
      {
        name: 'Car Park Management',
        href: '/services/car-park-management',
        
      },
      
      {
        name: 'Concrete Block Hire',
        href: '/services/concrete-block-hire',

      },
       {
        name: 'Court Enforcement',
        href: '/services/court-enforcement',
        
      },
    ],
  },
  {
    name: 'Areas Covered',
    href: '/areas-covered',
    subLinks: [
     


      { name: 'Manchester', href: '/areas-covered/manchester' },
      { name: 'Mersey Side', href: '/areas-covered/merseyside' },
      { name: 'Lanashire', href: '/areas-covered/lancashire' },
      { name: 'Cheshire', href: '/areas-covered/cheshire' },
      { name: 'Staffordshire', href: '/areas-covered/staffordshire' },
  
    ],
  },
  { name: 'About Us', href: '/about' },
  
  { name: 'News', href: '/news-insight' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({}); // Track dropdown state for Services and Areas Covered
  const [subServicesOpen, setSubServicesOpen] = useState({}); // Track sub-services state

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleSubServices = (serviceName) => {
    setSubServicesOpen((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/Mak-Security-Logo-300x60.png"
            alt="MAK Security Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`text-sm font-semibold text-gray-800 transition-colors duration-200 flex items-center ${
                  link.name === 'Services'
                    ? 'text-lg font-bold hover:bg-red-600 hover:text-white px-3 py-2 rounded-md'
                    : 'hover:text-red-600'
                }`}
              >
                {link.name}
                {link.subLinks && <FaChevronDown className="ml-1 text-xs" />}
              </Link>
              {link.subLinks && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 ease-in-out z-50">
                  {link.subLinks.map((subLink) => (
                    <div key={subLink.name} className="relative group/sub">
                      <Link
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-200"
                      >
                        {subLink.name}
                        {subLink.subServices && <FaChevronRight className="ml-1 inline text-xs" />}
                      </Link>
                      {subLink.subServices && (
                        <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover/sub:opacity-100 group-hover/sub:visible invisible transition-all duration-200 ease-in-out">
                          {subLink.subServices.map((subService) => (
                            <Link
                              key={subService.name}
                              href={subService.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-200"
                            >
                              {subService.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className={`block text-base font-medium text-gray-800 transition ${
                    link.name === 'Services' ? 'font-bold text-red-600' : 'hover:text-red-600'
                  }`}
                  onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="text-gray-800"
                  >
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        dropdownOpen[link.name] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.subLinks && dropdownOpen[link.name] && (
                <div className="pl-4 space-y-2 mt-2">
                  {link.subLinks.map((subLink) => (
                    <div key={subLink.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={subLink.href}
                          className="block text-sm text-gray-700 hover:text-red-600 transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                        {subLink.subServices && (
                          <button
                            onClick={() => toggleSubServices(subLink.name)}
                            className="text-gray-800"
                          >
                            <FaChevronDown
                              className={`text-xs transition-transform duration-200 ${
                                subServicesOpen[subLink.name] ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {subLink.subServices && subServicesOpen[subLink.name] && (
                        <div className="pl-4 space-y-2 mt-2">
                          {subLink.subServices.map((subService) => (
                            <Link
                              key={subService.name}
                              href={subService.href}
                              className="block text-sm text-gray-600 hover:text-red-600 transition"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subService.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}