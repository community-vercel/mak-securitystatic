import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'MAK Security - SIA Approved Security Experts',
  description: 'MAK Security offers SIA-approved security services in Manchester, Liverpool, and the North West. Call 0141 223 7281.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 text-black">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}