'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Enhancing Safety with Professional Manned Guarding Services',
    subtitle:
      'Discover how MAK Security’s expertly trained security personnel provide round-the-clock protection for businesses, construction sites, and private properties across the UK...',
    category: 'Manned Guarding',
    image: '/Manned-Guarding.jpg',
    author: 'James Carter',
    date: 'July 10, 2025',
    link: '/news-insight/security-guards-manchester',
  },
  {
    id: 2,
    title: 'Top 5 Benefits of CCTV Systems for Business Security',
    subtitle:
      'MAK Security explains how advanced CCTV solutions can deter crime, monitor activity, and protect your business premises with cutting-edge technology...',
    category: 'CCTV Systems',
    image: '/CCTV.jpg',
    author: 'Sarah Mitchell',
    date: 'June 15, 2025',
    link: '/news-insight/car-park-security-manchester',
  },
  {
    id: 3,
    title: 'Event Security: Ensuring Safety at Your Next Big Event',
    subtitle:
      'From festivals to corporate events, MAK Security provides tailored event security solutions to keep your guests safe and your event running smoothly...',
    category: 'Event Security',
    image: '/Event-Security.jpg',
    author: 'James Carter',
    date: 'May 25, 2025',
    link: '/news-insight/event-security-manchester',
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          MAK SECURITY’S NEWS & INSIGHTS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded shadow-md overflow-hidden flex flex-col"
          >
            {/* Blog Image with Category Label */}
            <div className="relative h-52 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#ff0600] text-white text-xs font-semibold px-3 py-1 rounded">
                {post.category}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-4 flex-grow flex flex-col justify-between text-left">
              <div>
                <h3 className="text-md font-semibold text-gray-800 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{post.subtitle}</p>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-400">
                  BY {post.author.toUpperCase()} <br />
                  {post.date}
                </p>
              </div>
           <Link
  href={post.link}
  className="mt-4 inline-block bg-[#ff0600] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-900 transition"
>
  Read More
  <span className="sr-only"> about {post.title}</span>
</Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;