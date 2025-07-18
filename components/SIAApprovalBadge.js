'use client';

import Image from 'next/image';

export default function SIAApprovalBadge() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <Image
          src="/SIA-Approved-Contractor-300x298.jpg" // Replace with your actual SIA badge image
          alt="SIA Approved Contractor"
          width={120}
          height={120}
          className="object-contain"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">SIA Approved Contractor</h3>
          <p className="text-gray-600">
            MAK Security is proud to be an SIA Approved Contractor, ensuring the highest standards of professionalism, reliability, and compliance in security services.
          </p>
        </div>
      </div>
    </section>
  );
}
