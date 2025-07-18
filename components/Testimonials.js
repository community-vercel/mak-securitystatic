export default function Testimonials() {
  const testimonials = [
    {
      name: "Paul Lewis",
      text: "Excellent service, friendly and professional.",
    },
    {
      name: "Hamza Hussain",
      text: "I have previously worked for them. Good experience.",
    },
    {
      name: "Mohammed Alghuriri",
      text: "Friendly and helpful staff!",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-6">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 shadow-md rounded">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <p className="font-semibold text-red-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
