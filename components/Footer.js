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
          <h4 className="text-lg font-bold mb-3 border-b border-red-600 pb-1">Top Pages</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {[
              "Services",
              "Areas Covered",
              "Key Holding",
              "Home Key Holding",
              "Commercial Key Holding Services",
              "Key Holding Services Manchester",
              "Security Manchester",
              "Manned Guarding",
              "Security Systems",
              "Car Park Management",
              "Facility Management",
              "Job Vacancies",
              "Contact Us",
              "Newsletter",
            ].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-white transition">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: News/Updates */}
        <div>
          <h4 className="text-lg font-bold mb-3 border-b border-red-600 pb-1">News/Updates</h4>

          {/* Sample update block */}
          <div className="mb-4 flex space-x-3">
            <Image src="/SIA-Logo.png" alt="SIA Update" width={60} height={60} className="object-cover rounded-sm" />
            <div>
              <p className="text-sm font-medium leading-snug">SIA makes a further reduction to the SIA licence fee</p>
              <p className="text-xs text-gray-400">MARCH 1, 2023</p>
            </div>
          </div>

          <div className="mb-4 flex space-x-3">
            <Image src="/acs-logo.jpg" alt="ACS" width={60} height={60} className="object-cover rounded-sm" />
            <div>
              <p className="text-sm font-medium leading-snug">ACS Pacesetters and Mak Security</p>
              <p className="text-xs text-gray-400">AUGUST 10, 2022</p>
            </div>
          </div>

          <div className="mb-4 flex space-x-3">
            <Image src="/Mak_Contact-60x60.jpg" alt="Car Park" width={60} height={60} className="object-cover rounded-sm" />
            <div>
              <p className="text-sm font-medium leading-snug">Car Park Security Manchester</p>
              <p className="text-xs text-gray-400">SEPTEMBER 8, 2020</p>
            </div>
          </div>

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
