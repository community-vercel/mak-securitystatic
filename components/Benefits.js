import { FaCheckCircle } from "react-icons/fa";

export default function Benefits() {
  const items = [
    "Top-class security",
    "Dedicated account managers",
    "24hr Control Room",
    "Live GPS tracking",
    "Rapid response vehicles",
    "Real-time incident reports",
    "Same day setup",
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-red-600">
          Why Choose MAK Security?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <FaCheckCircle className="text-green-400 mt-1" />
              <span className="text-white text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
