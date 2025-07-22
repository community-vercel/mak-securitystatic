import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 border-b border-gray-700 pb-10">
        {/* Column 1: Get in Touch */}
        <div>
<p className="text-lg font-bold mb-3 border-b border-red-600 pb-1">Get In Touch</p>
          <p className="text-sm mb-1 font-semibold"><FaMapMarkerAlt className="inline mr-2" />MAK Security Head Office</p>
          <p className="text-sm ml-5">Manor House</p>
          <p className="text-sm ml-5">Manor Street</p>
          <p className="text-sm ml-5">Manchester</p>
          <p className="text-sm ml-5 mb-2">M34 5JG</p>

          <p className="text-sm mb-1"><FaPhoneAlt className="inline mr-2" />0161 223 7281</p>
          <p className="text-sm mb-3"><FaEnvelope className="inline mr-2" />sales@mak-security.co.uk</p>

          {/* Social icons */}
      <div className="flex space-x-3 mt-4">
  <a href="#" className="bg-blue-700 p-2 rounded" aria-label="Facebook">
    <FaFacebookF />
  </a>
  <a href="#" className="bg-blue-500 p-2 rounded" aria-label="Twitter">
    <FaTwitter />
  </a>
  <a href="#" className="bg-pink-600 p-2 rounded" aria-label="Instagram">
    <FaInstagram />
  </a>
  <a href="#" className="bg-blue-800 p-2 rounded" aria-label="LinkedIn">
    <FaLinkedinIn />
  </a>
</div>

        </div>

        {/* Column 2: Top Pages */}
        <div>
          <p className="text-lg font-bold mb-3 border-b border-red-600 pb-1">Top Pages</p>

        <ul className="space-y-1 text-sm text-gray-300">
  {[
    { name: "Services", href: "/services" },
    { name: "Areas Covered", href: "/areas-covered" },
    { name: "Key Holding", href: "/services/key-holding" },
    { name: "Home Key Holding", href: "/services/home-key-holding-manchester" },
    { name: "Commercial Key Holding Services", href: "/services/commercial-key-holding-manchester" },
    { name: "Key Holding Services Manchester", href: "/services/commercial-key-holding-manchester" },
    { name: "Security Manchester", href: "/services/security-guards-manchester" },
    { name: "Manned Guarding", href: "/services/manned-guarding" },
    { name: "Security Systems", href: "/services/event-security" },
    { name: "Car Park Management", href: "/services/car-park-management" },
    { name: "Facility Management", href: "/services/facility-management" },
    { name: "Job Vacancies", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Newsletter", href: "/newsletter" },
  ].map((item, i) => (
    <li key={i}>
      <Link href={item.href} className="hover:text-white transition">
        {item.name}
      </Link>
    </li>
  ))}
</ul>

        </div>

        {/* Column 3: News/Updates */}
       <div>
  <p className="text-lg font-bold mb-3 border-b border-red-600 pb-1">News/Updates</p>

  {/* SIA Update */}
  <Link href="/news-insight/sia-licence-reduction">
    <div className="mb-4 flex space-x-3 cursor-pointer hover:opacity-90 transition">
      <Image src="/SIA-Logo.png" alt="SIA Update" width={60} height={60} className="object-cover rounded-sm" />
      <div>
        <p className="text-sm font-medium leading-snug">SIA makes a further reduction to the SIA licence fee</p>
        <p className="text-xs text-gray-400">MARCH 1, 2023</p>
      </div>
    </div>
  </Link>

  {/* ACS Pacesetters */}
  <Link href="/news-insight/acs-pacesetters-mak">
    <div className="mb-4 flex space-x-3 cursor-pointer hover:opacity-90 transition">
      <Image src="/acs-logo.jpg" alt="ACS" width={60} height={60} className="object-cover rounded-sm" />
      <div>
        <p className="text-sm font-medium leading-snug">ACS Pacesetters and Mak Security</p>
        <p className="text-xs text-gray-400">AUGUST 10, 2022</p>
      </div>
    </div>
  </Link>

  {/* Car Park Security */}
  <Link href="/news-insight/car-park-security-manchester">
    <div className="mb-4 flex space-x-3 cursor-pointer hover:opacity-90 transition">
      <Image src="/Mak_Contact-60x60.jpg" alt="Car Park" width={60} height={60} className="object-cover rounded-sm" />
      <div>
        <p className="text-sm font-medium leading-snug">Car Park Security Manchester</p>
        <p className="text-xs text-gray-400">SEPTEMBER 8, 2020</p>
      </div>
    </div>
  </Link>

  <button className="bg-red-600 text-white px-4 py-2 w-full font-bold mt-2 hover:bg-red-700 transition">
    JOIN OUR NEWSLETTER
  </button>
</div>

      </div>

      {/* Bottom Strip */}
      <div className="text-center text-xs text-gray-400 py-4 space-x-4">
        <Link href="#">Home</Link>
        <Link href="#">Cookie Policy</Link>
        <Link href="#">Privacy Policy</Link>
       <p className="text-sm text-gray-400 text-center mt-4">
  © 2025 Mak Security Services | Company Number: 06990809 – Developed &amp; SEO by{' '}
  <Link
    href="https://sharplogicians.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    Sharplogicians
  </Link>
</p>
      </div>
    </footer>
  );
}
