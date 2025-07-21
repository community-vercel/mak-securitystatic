'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      title: 'Professionalism',
      description: 'Our SIA-licensed team delivers industry-leading security services with the highest standards of expertise and integrity.',
    },
    {
      title: 'Reliability',
      description: 'Available 24/7, we ensure rapid response and consistent service to protect your assets and provide peace of mind.',
    },
    {
      title: 'Client Focus',
      description: 'We tailor our solutions to meet your unique needs, building long-term partnerships based on trust and satisfaction.',
    },
    {
      title: 'Innovation',
      description: 'From AI-assisted CCTV to advanced key holding systems, we embrace cutting-edge technology to enhance security.',
    },
  ];

  const timeline = [
    { year: '2009', event: 'MAK Security founded in Manchester, establishing a commitment to excellence in security services.' },
    { year: '2012', event: 'Achieved SIA Approved Contractor status, recognizing our high standards in security operations.' },
    { year: '2018', event: 'Expanded services to include event security and mobile patrols across the North West.' },
    { year: '2023', event: 'Joined ACS Pacesetters, ranking among the top 15% of SIA-approved contractors.' },
    { year: '2025', event: 'Introduced advanced AI-powered CCTV solutions to enhance client security.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/Mak_Security_About.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MAK Security</h1>
            <p className="text-lg">Delivering trusted, SIA-approved security solutions across Manchester, Liverpool, and the North West.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto py-4 px-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt; <span>About Us</span>
      </nav>

      {/* Company Overview */}
      <section className="py-12 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Founded in 2009, MAK Security is a leading SIA-approved contractor providing comprehensive security services across Manchester, Liverpool, and the North West. With over 50 years of combined industry experience, our team specializes in manned guarding, key holding, event security, and advanced CCTV solutions. As proud members of the ACS Pacesetters, we rank among the top 15% of security providers, delivering tailored, reliable, and innovative solutions to protect our clients’ assets and ensure their peace of mind.
        </p>
      </section>

      {/* Core Values */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold text-red-600 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`mb-8 flex justify-between items-center w-full ${
                  idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-5/12"></div>
                <div className="w-5/12 p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800">{item.year}</h4>
                  <p className="text-gray-600">{item.event}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 text-center bg-gray-100">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "MAK Security has been an invaluable partner for our business. Their professionalism and rapid response times give us complete confidence in our security." — <strong>Paul H., Retail Manager</strong>
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Team</h3>
          <p className="text-gray-600 text-center mb-8">
            Our dedicated team of SIA-licensed professionals drives our success, bringing expertise and passion to every project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-red-600 mb-2">Operations Director</h4>
              <p className="text-gray-600">With over 15 years in the security industry, our Operations Director leads our team to deliver exceptional service across the North West.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-red-600 mb-2">Head of Security</h4>
              <p className="text-gray-600">Overseeing our SIA-licensed officers, our Head of Security ensures rigorous training and compliance with industry standards.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-red-600 mb-2">Client Services Manager</h4>
              <p className="text-gray-600">Our Client Services Manager builds strong relationships, tailoring solutions to meet each client’s unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center bg-red-600 text-white">
        <h3 className="text-2xl font-semibold mb-2">Partner with MAK Security</h3>
        <p className="text-3xl font-bold mb-4">0161 223 7281</p>
        <Link href="/contact">
          <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-900 transition duration-300">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
}