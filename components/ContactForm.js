export default function ContactStrip() {
  return (
    <section className="bg-red-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <input
            type="text"
            placeholder="Name*"
            className="p-3 rounded text-black bg-white w-full shadow"
          />
          <input
            type="email"
            placeholder="Email*"
            className="p-3 rounded text-black bg-white w-full shadow"
          />
          <input
            type="text"
            placeholder="Subject*"
            className="p-3 rounded text-black bg-white w-full shadow"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="p-3 rounded text-black bg-white w-full shadow"
          />
          <button
            type="submit"
            className="bg-[#ff1a14] text-white font-bold px-4 py-3 rounded hover:bg-[#000] transition w-full"
          >
            Request a Call Back
          </button>
        </form>
      </div>
    </section>
  );
}
