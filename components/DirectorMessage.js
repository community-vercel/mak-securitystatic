export default function DirectorMessage() {
  return (
    <section className="bg-white py-16 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Message from Our Director</h2>

        <div className="relative bg-gray-50 p-6 rounded-lg shadow-md">
          <svg
            className="absolute top-0 left-0 w-10 h-10 text-red-200 -translate-x-1/2 -translate-y-1/2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6A4.17 4.17 0 003 10.17V17a1 1 0 001 1h5a1 1 0 001-1v-4H7v-2.83A2.17 2.17 0 019.17 8H11V6H7.17zm9 0A4.17 4.17 0 0012 10.17V17a1 1 0 001 1h5a1 1 0 001-1v-4h-3v-2.83A2.17 2.17 0 0116.17 8H18V6h-1.83z" />
          </svg>

          <p className="text-gray-700 text-lg italic leading-relaxed">
            “Welcome to the MAK Security Manchester web page. MAK Security aims to ensure safe environments where community members can live and work securely.”
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            I cannot express my appreciation enough for the progress we’ve made in recent years—for the hard work, dedication, and delivery of the highest quality of service to our
            customers by the team at MAK.
          </p>

          <p className="mt-6 text-right text-sm text-gray-600">— Managing Director</p>
        </div>
      </div>
    </section>
  );
}
