import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <section className="bg-white py-8 px-4 text-center border-t">
      <h2 className="text-lg font-semibold mb-4 text-red-700">MAK Security on Social Media</h2>
    <div className="flex justify-center gap-6 text-3xl text-red-700">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
</div>

    </section>
  );
}
