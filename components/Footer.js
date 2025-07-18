 
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MAK Security. All rights reserved.</p>
        <p>Contact: info@mak-security.co.uk | 01234 567 890</p>
        <div className="mt-2">
          <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white mx-2">LinkedIn</a>
          <a href="https://www.twitter.com" className="text-gray-300 hover:text-white mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
}