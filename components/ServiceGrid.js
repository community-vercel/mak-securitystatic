import Image from 'next/image';

export default function ServiceGrid() {
  const services = [
    { title: 'Manned Security', image: '/images/manned-security.jpg' },
    { title: 'Event Security', image: '/images/event-security.jpg' },
    { title: 'Mobile Patrolling', image: '/images/mobile-patrolling.jpg' },
    { title: 'CCTV Monitoring', image: '/images/cctv-monitoring.jpg' },
    { title: 'Access Control', image: '/images/access-control.jpg' },
    { title: 'Key Holding', image: '/images/key-holding.jpg' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-center text-gray-600 mb-6">
          We supply and manage trained SIA accredited officers who specialise in Manned Security, Event Security, and Mobile Patrolling. You can be rest assured that your property is well guarded. We also undertake the following...
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="text-center p-2">
              <Image src={service.image} alt={service.title} width={200} height={150} className="mx-auto mb-2" />
              <p className="font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Image src="/images/sia-logo.png" alt="SIA Approved" width={150} height={60} />
          <p className="text-gray-600 mt-2">
            Choose an SIA-approved contractor. When you hire a security company that has the benefit of a government-approved contractor as a company that adheres to staff training, financial management, and the company’s health and safety policies.
          </p>
        </div>
      </div>
    </section>
  );
}