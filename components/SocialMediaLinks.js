import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function SocialMediaLinks() {
  return (
    <section className="py-6 bg-gray-200 text-center">
      <h2 className="text-lg font-semibold mb-2">Mak Security On Social Media</h2>
      <div className="flex justify-center gap-4 text-2xl text-red-700">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </section>
  );
}
