 
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MAK Security
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}