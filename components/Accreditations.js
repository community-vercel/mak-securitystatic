'use client';

import Image from 'next/image';

const logos = [
  '/Safe-Contractor.png',
  '/SIA-Logo.png',
  '/5-1.png',
  '/acs-logo.jpg',
  '/4-1.png',
];

export default function Accreditations() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Accreditations</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image src={src} alt={`Logo ${i + 1}`} width={100} height={100} className="object-contain grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
