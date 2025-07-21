'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    business: '',
    postcode: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.name || !formData.phone || !formData.email || !formData.subject) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    try {
      // Placeholder for POST request
      console.log('Form submitted:', formData);
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setFormStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', phone: '', email: '', subject: '', business: '', postcode: '', message: '' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/Mak_Security_Contact.jpg"
          alt="Contact Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto py-4 px-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt; <span>Contact Us</span>
      </nav>

      {/* Intro Section */}
      <section className="py-12 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          24/7 Security Services in Manchester, Liverpool, and Across the North West
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          From installing state-of-the-art CCTV systems to safeguarding your property with SIA-licensed manned guarding, MAK Security offers comprehensive 24/7 security services across the North West. Our 24-hour control room ensures you can reach us anytime, day or night.
        </p>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            {formStatus && (
              <div className={`mb-4 p-4 rounded-md ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Your Name*"
                  className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="Phone*"
                  className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Your Email*"
                  type="email"
                  className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  name="subject"
                  onChange={handleChange}
                  value={formData.subject}
                  placeholder="Subject*"
                  className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  name="business"
                  onChange={handleChange}
                  value={formData.business}
                  placeholder="Business Name"
                  className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  name="postcode"
                  onChange={handleChange}
                  value={formData.postcode}
                  placeholder="Your Post Code"
                  className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="How Can We Help?"
                rows={5}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Phone:</strong> <a href="tel:01612237281" className="text-red-600 hover:underline">0161 223 7281</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@mak-security.co.uk" className="text-red-600 hover:underline">info@mak-security.co.uk</a>
              </p>
              <p>
                <strong>Address:</strong> MAK Security, Manchester, M1 2JQ, United Kingdom
              </p>
              <p>
                <strong>Operating Hours:</strong> 24/7 Control Room
              </p>
            </div>
            {/* Embedded Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.673938277602!2d-2.245654684174135!3d53.48075998000462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c3c3c3c3c3%3A0x1f7c3c3c3c3c3c3c!2sManchester%2C%20UK!5e0!3m2!1sen!2suk!4v1698765432100!5m2!1sen!2suk"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MAK Security Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 text-center bg-gray-100">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-700 italic">
  &quot;Service is excellent, happy with all aspects of service.&quot; — <strong>Patrick</strong>
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center bg-red-600 text-white">
        <h3 className="text-2xl font-semibold mb-2">Need Immediate Assistance?</h3>
        <p className="text-3xl font-bold mb-4">0161 223 7281</p>
        <Link href="/contact-us">
          <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-900 transition duration-300">
            Contact Us Now
          </button>
        </Link>
      </section>
    </div>
  );
}