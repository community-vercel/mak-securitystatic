"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'Manned Guarding',
    'Security Guards',
    'Key Holding Services',
    'CCTV Security',
    'Event Security',
    'Mobile Security',
    'Facility Management',
    'Car Park Management',
    'Concrete Block Hire',
    'Court Enforcement',
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-5 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          MAK Security
        </Link>
        <ul className="flex space-x-8 items-center text-lg">
          <li><Link href="/" className="hover:text-blue-200 transition-colors duration-200">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-200 transition-colors duration-200">About</Link></li>
          <li 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/services" className="hover:text-blue-200 transition-colors duration-200">
              <span className="group-hover:hidden">Services</span>
              <span className="hidden group-hover:inline">Services</span>
            </Link>
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-96 bg-white text-gray-800 shadow-xl rounded-xl p-6 z-10 transform transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="text-center font-semibold text-xl text-blue-900 mb-4 border-b border-gray-200 pb-2">Our Services</div>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-md px-2 py-1"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li><Link href="/blog" className="hover:text-blue-200 transition-colors duration-200">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-blue-200 transition-colors duration-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}