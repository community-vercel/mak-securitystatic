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
          { name: 'Static Guarding', href: '/services/manned-guarding/static-guarding' },
          { name: 'Retail Security', href: '/services/manned-guarding/retail-security' },
          { name: 'Corporate Security', href: '/services/manned-guarding/corporate-security' },
        ],
      },
      {
        name: 'Event Security',
        href: '/services/event-security',
        subServices: [
          { name: 'Crowd Control', href: '/services/event-security/crowd-control' },
          { name: 'VIP Protection', href: '/services/event-security/vip-protection' },
          { name: 'Event Access Management', href: '/services/event-security/access-management' },
        ],
      },
      {
        name: 'Key Holding',
        href: '/services/key-holding',
        subServices: [
          { name: 'Alarm Response', href: '/services/key-holding/alarm-response' },
          { name: 'Key Storage', href: '/services/key-holding/key-storage' },
          { name: 'Lock/Unlock Services', href: '/services/key-holding/lock-unlock' },
        ],
      },
      {
        name: 'Facility Management',
        href: '/services/facility-management',
        subServices: [
          { name: 'Access Control', href: '/services/facility-management/access-control' },
          { name: 'Building Patrols', href: '/services/facility-management/building-patrols' },
          { name: 'Security Audits', href: '/services/facility-management/security-audits' },
        ],
      },
      {
        name: 'Car Park Management',
        href: '/services/car-park-management',
        subServices: [
          { name: 'Parking Enforcement', href: '/services/car-park-management/parking-enforcement' },
          { name: 'Traffic Management', href: '/services/car-park-management/traffic-management' },
          { name: 'CCTV Surveillance', href: '/services/car-park-management/cctv-surveillance' },
        ],
      },
      {
        name: 'Concrete Block Hire',
        href: '/services/concrete-block-hire',
        subServices: [
          { name: 'Site Security Blocks', href: '/services/concrete-block-hire/site-security' },
          { name: 'Event Perimeter Blocks', href: '/services/concrete-block-hire/event-perimeter' },
          { name: 'Temporary Barriers', href: '/services/concrete-block-hire/temporary-barriers' },
        ],
      },
      {
        name: 'CCTV',
        href: '/services/cctv',
        subServices: [
          { name: 'AI-Powered CCTV', href: '/services/cctv/ai-powered' },
          { name: 'Remote Monitoring', href: '/services/cctv/remote-monitoring' },
          { name: 'CCTV Installation', href: '/services/cctv/installation' },
        ],
      },
    ],
  },
  {
    name: 'Areas Covered',
    href: '/areas-covered',
    subLinks: [
      { name: 'Manchester', href: '/areas-covered/manchester' },
      { name: 'Liverpool', href: '/areas-covered/liverpool' },
      { name: 'Salford', href: '/areas-covered/salford' },
      { name: 'Bolton', href: '/areas-covered/bolton' },
      { name: 'Preston', href: '/areas-covered/preston' },
      { name: 'Warrington', href: '/areas-covered/warrington' },
      { name: 'Chester', href: '/areas-covered/chester' },
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