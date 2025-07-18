export default function WhyChooseUs() {
  const benefits = [
    'Based in Manchester, MAK Security is a reputable security company serving Manchester, Liverpool, and the North West.',
    'Prevent crime, improve safety, and deploy SIA-approved security personnel.',
    '24-hour manned guarding and mobile patrols.',
    'Over 20 years of experience in the security industry.',
    'Cold call solutions with a proven track record.',
    'Management team with 30+ years of Police experience working in Greater Manchester.',
  ];

  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose MAK Security?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}