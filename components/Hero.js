'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css'; // Adjust the path as needed


const slides = [
  {
    src: '/Mak_Security_Home.jpg',
    alt: 'Professional Security Staff at Site',
    title: 'Trusted Security Solutions for Your Peace of Mind',
    description: 'Providing professional manned guarding, event security, and static guarding.',
    buttonText: 'Explore Our Services',
    buttonLink: '/services',
  },
  {
    src: '/Mak-Security.jpg',
    alt: 'Mobile Security Patrol in Action',
    title: 'Mobile Patrols That Never Sleep',
    description: '24/7 patrols keeping your premises safe, day and night.',
    buttonText: 'Request Patrol',
    buttonLink: '/contact',
  },
  {
    src: '/Mak_Security_Services.jpg',
    alt: 'CCTV Surveillance Operations',
    title: 'Advanced CCTV Monitoring Solutions',
    description: 'Real-time video monitoring for total site control and peace of mind.',
    buttonText: 'Book a Consultation',
    buttonLink: '/contact',
  },
];

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60" />

              {/* Slide Text Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl drop-shadow-md">
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="mt-6 inline-block bg-[#ff1a14] hover:bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
