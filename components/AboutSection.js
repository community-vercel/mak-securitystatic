import Image from 'next/image';

export default function AboutMak() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <Image src="/Mak-Security-Van.jpg" alt="MAK Van" width={600} height={400} className="rounded shadow" />
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">About MAK Security</h2>
          <p className="text-gray-700 mb-3">
            MAK Security Services implements new ways to improve business continuity, remove service disruptions, and proactively tackle problems before they escalate.
          </p>
          <p className="text-gray-700 mb-3">
            We are an SIA approved company and have been since 2010, providing manned guarding, event security, mobile patrols, and alarm response services.
          </p>
        </div>
      </div>
    </section>
  );
}
