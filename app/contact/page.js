 
export default function Contact() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Reach out to MAK Security for professional security solutions.
      </p>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
          <button type="submit" className="bg-blue-900 text-white p-2 rounded w-full">
            Send Message
          </button>
        </form>
        <p className="mt-4 text-center">
          Email: info@mak-security.co.uk | Phone: 01234 567 890
        </p>
      </div>
    </div>
  );
}