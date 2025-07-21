'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    cv: null,
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    try {
      // Placeholder for POST request
      console.log('Application submitted:', formData);
      // Example: await fetch('/api/careers', { method: 'POST', body: JSON.stringify(formData) });
      setFormStatus({ type: 'success', message: 'Your application has been sent successfully!' });
      setFormData({ name: '', email: '', phone: '', role: '', cv: null, message: '' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    }
  };

  const jobListings = [
    {
      title: 'Security Officer - Manchester',
      description: 'Join our team of SIA-licensed security officers to provide manned guarding services for commercial and residential properties in Manchester. Competitive salary and training provided.',
      slug: 'security-officer-manchester',
    },
    {
      title: 'Event Security Staff - North West',
      description: 'Work as part of our event security team to ensure safe and enjoyable experiences at concerts, festivals, and corporate events across the North West. SIA license required.',
      slug: 'event-security-north-west',
    },
    {
      title: 'Key Holding and Response Officer',
      description: 'Provide professional key holding and alarm response services for clients in Manchester and Liverpool. Requires SIA license and excellent response times.',
      slug: 'key-holding-response',
    },
    {
      title: 'Mobile Patrol Officer',
      description: 'Conduct mobile patrols to secure client premises across the North West. SIA license and driving license required, with opportunities for career progression.',
      slug: 'mobile-patrol-officer',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/Mak_Security_Careers.jpg"
          alt="Careers Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg">Become part of MAK Security’s mission to deliver exceptional security services across the North West.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto py-4 px-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt;  <span>Careers</span>
      </nav>

      {/* Intro Section */}
      <section className="py-12 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Build Your Career with MAK Security
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At MAK Security, we’re proud to be an SIA-approved contractor, delivering 24/7 security services across Manchester, Liverpool, and the North West. Join our team of dedicated professionals and benefit from industry-leading training, career progression opportunities, and a supportive work environment. Whether you’re an experienced SIA-licensed officer or looking to start your career in security, we offer roles that reward hard work and commitment.[](https://www.mak-security.co.uk/job-vacancies/)
        </p>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobListings.map((job, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-red-600 mb-2">{job.title}</h4>
                <p className="text-gray-600 mb-4">{job.description}</p>
                {/* <Link href={`/careers/apply?role=${job.slug}`} className="text-blue-600 hover:underline font-medium">
                  Apply Now
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Apply Now</h3>
          <p className="text-gray-600 mb-6 text-center">
            Don’t see a role that fits? Submit a general application, and we’ll consider you for future opportunities.
          </p>
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
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Your Email*"
                type="email"
                className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                placeholder="Your Phone*"
                className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                name="role"
                onChange={handleChange}
                value={formData.role}
                placeholder="Desired Role*"
                className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <input
              name="cv"
              type="file"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Tell us about yourself and why you want to join MAK Security"
              rows={5}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 text-center bg-gray-100">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "MAK Security provides excellent training and a supportive team environment. I’ve grown my career from a security officer to a supervisor in just two years!" — <strong>Emma</strong>
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center bg-red-600 text-white">
        <h3 className="text-2xl font-semibold mb-2">Ready to Start Your Career?</h3>
        <p className="text-3xl font-bold mb-4">0161 223 7281</p>
        <Link href="/contact">
          <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-900 transition duration-300">
            Contact Our Recruitment Team
          </button>
        </Link>
      </section>
    </div>
  );
}