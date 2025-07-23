'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const newsData = [
  {
    title: 'SIA makes a further reduction to the SIA licence fee',
    date: 'April 21, 2023',
    excerpt: 'SIA makes a further reduction to the SIA licence fee from April 2023, the cost of applying for an individual SIA licence for any sector in the regulated private security industry will be reduced to £184.',
    image: '/SIA-Approved-Contractor-300x298.jpg',
    slug: 'sia-licence-reduction',
  },
  {
    title: 'ACS Pacesetters and Mak Security',
    date: 'April 18, 2023',
    excerpt: 'MAK Security Services join ACS Pacesetters. The ACS Pacesetters is independent of the SIA and the ACS and promotes those security companies who are SIA approved contractors that currently have a score in the top 15% of all accredited...',
    image: '/news/news-acs-pacesetters-720x280-1.png',
    slug: 'acs-pacesetters-mak',
  },
  {
    title: 'Car Park Security Manchester',
    date: 'March 29, 2023',
    excerpt: 'Whether your interest is car park management or parking enforcement we have a host of quality products and services to help. We cover every aspect of car park security Manchester and it\'s continual management including car park...',
    image: '/news/Mak_Security_Manchester.jpg',
    slug: 'car-park-security-manchester',
  },
  {
    title: 'Key Holding Response',
    date: 'March 15, 2023',
    excerpt: 'Whether you are a home or business owner, you require the services of a bonafide professional key holding response company. That\'s where we come in!',
    image: '/news/Key-Holding-Manchester-270x310.jpg',
    slug: 'key-holding-response',
  },
  {
    title: 'Event Security Manchester',
    date: 'March 10, 2023',
    excerpt: 'MAK Security provides effective event security services Manchester. Working closely with your clients, we work to ensure a positive experience, minimising risk, and quickly responding to any incidents.',
    image: '/news/Manned_Guards-270x310.jpg',
    slug: 'event-security-manchester',
  },
  {
    title: 'Key Holding Services Greater Manchester',
    date: 'March 01, 2023',
    excerpt: 'MAK Security provides reliable key holding services Manchester for domestic and commercial clients. Our trained and vetted officers arrive promptly ensuring the safety of your property.',
    image: '/news/Key_Holding_Security-270x310.jpg',
    slug: 'key-holding-services-manchester',
  },
  {
    title: 'Security Guards Manchester',
    date: 'February 24, 2023',
    excerpt: '24/7 Guarding Services. Damage sustained due to burglary or vandalism can have a significant financial and emotional impact. We provide trained, reliable guards to prevent such issues.',
    image: '/news/Security-Guard.jpg',
    slug: 'security-guards-manchester',
  },
  {
    title: 'Guidance On Hiring Staff To Manage Social Distancing Queues',
    date: 'February 15, 2023',
    excerpt: 'Many retailers are seeking assistance to manage queues outside their premises amid the COVID-19 pandemic. We provide reliable staff and guidance for social distancing enforcement.',
    image: '/news/Corona-Virus.jpg',
    slug: 'hiring-staff-social-distancing',
  },
  {
    title: 'Corona Virus And SIA Security Personnel',
    date: 'February 01, 2023',
    excerpt: 'Boris Johnson gave a speech directed at the British public with further instructions on what measures need to be taken to combat the spread of the COVID-19 Corona Virus.',
    image: '/news/Covid-19-1-270x310.jpg',
    slug: 'corona-virus-security-personnel',
  },
  {
    title: 'Covid-19 Pandemic Procedure',
    date: 'January 25, 2023',
    excerpt: 'We\'ve compiled a list of our Covid-19 Pandemic Procedure that our team will be implementing across the board. Read more to understand what steps we\'ve taken.',
    image: '/news/Covid-19-1-270x310.jpg',
    slug: 'covid-19-pandemic-procedure',
  },
];

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(newsData.length / postsPerPage);

  return (
    <div className="min-h-screen bg-white py-26 px-6 md:px-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:underline">Home</Link> &gt; <span>News</span>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">News & Insights</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((item, idx) => (
          <div key={idx} className="rounded-xl shadow-lg overflow-hidden bg-white">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full object-cover h-52"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600 mb-1 hover:underline">
                <Link href={`/news-insight/${item.slug}`}>{item.title}</Link>
              </h3>
              <p className="text-xs text-gray-400 mb-2">{item.date}</p>
              <p className="text-sm text-gray-700 line-clamp-3">{item.excerpt}</p>
              <Link
                href={`/news-insight/${item.slug}`}
                className="inline-block mt-3 text-sm text-red-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-4 py-1 border rounded-md text-sm font-medium ${
              currentPage === i + 1
                ? 'bg-red-600 text-white'
                : 'bg-white text-red-600 border-red-300'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}