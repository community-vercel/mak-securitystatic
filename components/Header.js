'use client';
 
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
 
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
    { name: 'News', href: '/news-insight' },

  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];
 
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/Mak-Security-Logo-300x60.png"
            alt="MAK Logo"
            width={140}
            height={60}
            className="object-contain"  
          />
        </Link>
 
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
 
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
 
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-gray-800 hover:text-red-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
 
 