export default function StepsSection() {
  const steps = [
    {
      title: "Site Visit",
      desc: "We complete a full site survey, risk assessment and discuss your requirements.",
    },
    {
      title: "Service Delivery",
      desc: "Install systems or begin mobile guarding/manned service as per your needs.",
    },
    {
      title: "Friendly Support",
      desc: "Dedicated account manager & 24/7 help from our control room team.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-10">
          Our 3-Step Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center text-xl font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
