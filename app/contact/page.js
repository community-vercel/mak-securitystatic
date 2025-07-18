export default function Contact() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-md mx-auto text-center">
        <p className="text-lg mb-4">Call us: <a href="tel:01412237281" className="underline">0141 223 7281</a></p>
        <p className="text-lg mb-4">Email: <a href="mailto:info@mak-security.co.uk" className="underline">info@mak-security.co.uk</a></p>
        <p className="text-lg">Request a Call Back</p>
        <form className="space-y-4 mt-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
          <button type="submit" className="bg-red-700 text-white p-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}