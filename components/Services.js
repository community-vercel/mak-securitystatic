import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";

const services = [
  { title: "Manned Security Guarding", image: "/Manned-Guarding.jpg", slug: "manned-guarding" },
  { title: "Key Holding & Alarm Response", image: "/Key-Holding.jpg", slug: "key-holding" },
  { title: "Car Park Management", image: "/Car-Park-Management.jpg", slug: "car-park-management" },
  { title: "Event Security", image: "/Event-Security.jpg", slug: "event-security" },
  { title: "Facility Management", image: "/Facility-Management.jpg", slug: "facility-management" },
  { title: "Court Enforcement", image: "/Membership-Processing.png", slug: "court-enforcement" },
  { title: "CCTV Monitoring", image: "/CCTV.jpg", slug: "cctv" },
  { title: "Concrete Block Hire", image: "/Concrete_Block-Hire.jpg", slug: "concrete-block-hire" },
];


export default function Services() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-10 text-lg">
          We supply and manage trained, SIA-licensed security officers across a range of specialised services.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
  <Link href={`/services/${service.slug}`} key={idx}>
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
      <div className="relative w-full h-[200px]">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 text-left">
        <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
          <FaShieldAlt className="text-red-600" />
          {service.title}
        </h3>
      </div>
    </div>
  </Link>
))}

        </div>
      </div>
    </section>
  );
}
