'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
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
  const swiperRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    enquiry: '',
  });
  const [charCount, setCharCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stopAutoplay = () => {
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const startAutoplay = () => {
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'enquiry') setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      enquiry: '',
    });
    setCharCount(0);
  };

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log('Swiper initialized:', swiper);
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        allowTouchMove={isClient ? !document.activeElement?.closest('form') : true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="absolute top-0 left-0 w-full h-full z-0"
                priority={idx === 0}
                onError={() => console.error(`Failed to load image: ${slide.src}`)}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-5"></div>
              {/* Slide Content */}
              <div className="absolute inset-0 z-10 max-w-6xl mx-auto flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg px-4 py-2 rounded">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl drop-shadow-md px-4 py-2 rounded">
                  {slide.description}
                </p>
                <Link href={slide.buttonLink}>
                  <button className="bg-[#ff0600] hover:bg-gray-800 text-white py-2 px-4 sm:px-6 rounded-md text-sm sm:text-base font-semibold transition">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Quote Form */}
      <div className="absolute top-4 sm:top-8 md:top-16 right-0 left-0 mx-auto md:right-4 md:left-auto w-[90%] max-w-md md:w-[350px] z-20 bg-white rounded-lg shadow-2xl p-4 sm:p-6 mt-12 text-black">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-1">Request a Quote</h2>
        <p className="text-xs sm:text-sm text-center italic text-red-600 mb-4">Fill in your information below</p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              placeholder="NAME*"
              className="border px-3 py-2 rounded-md text-sm placeholder-gray-500 w-full"
              value={formData.name}
              onChange={handleInputChange}
              required
              onFocus={stopAutoplay}
              onBlur={startAutoplay}
            />
            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER*"
              className="border px-3 py-2 rounded-md text-sm placeholder-gray-500 w-full"
              value={formData.phone}
              onChange={handleInputChange}
              required
              onFocus={stopAutoplay}
              onBlur={startAutoplay}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="EMAIL ADDRESS*"
            className="w-full border px-3 py-2 rounded-md text-sm placeholder-gray-500"
            value={formData.email}
            onChange={handleInputChange}
            required
            onFocus={stopAutoplay}
            onBlur={startAutoplay}
          />
          <input
            type="text"
            name="company"
            placeholder="COMPANY NAME IF APPLICABLE"
            className="w-full border px-3 py-2 rounded-md text-sm placeholder-gray-500"
            value={formData.company}
            onChange={handleInputChange}
            onFocus={stopAutoplay}
            onBlur={startAutoplay}
          />
          <div>
            <textarea
              name="enquiry"
              placeholder="YOUR ENQUIRY*"
              rows={4}
              maxLength={1500}
              className="w-full border px-3 py-2 rounded-md text-sm placeholder-gray-500 resize-none"
              value={formData.enquiry}
              onChange={handleInputChange}
              required
              onFocus={stopAutoplay}
              onBlur={startAutoplay}
            />
            <p className="text-xs text-gray-500 text-right">{charCount} of 1500 max characters.</p>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff0600] hover:bg-gray-800 text-white py-2 rounded-md text-sm font-semibold transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}