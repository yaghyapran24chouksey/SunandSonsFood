import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contactus-page" className="bg-blue-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/img/sunandsonsfood_logo.png"
              alt="Sun & Sons Foods"
              className="w-16 h-16 object-contain hover:scale-105 transition"
            />
            <h3 className="text-2xl font-semibold">Sun & Sons Foods</h3>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Bringing freshness, quality, and mutual growth to every product we deliver.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
          <ul className="space-y-2 text-blue-100">
            <li><a href="#home-page" className="hover:text-yellow-400 transition">Home</a></li>
            <li><Link to="/careers-page" className="hover:text-yellow-400 transition">Careers</Link></li>
            <li><Link to="/b2b" className="hover:text-yellow-400 transition">B2B Enquiry</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
          <ul className="space-y-2 text-blue-100">
            <li>Email: sunandsonsfoods@gmail.com</li>
            <li>Phone: +91 78798 67530</li>
            <li>Address: Dawa Bazar, Indore, India</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaFacebook /></a>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-blue-700 pt-4 text-center text-blue-200 text-sm">
        © {new Date().getFullYear()} Sun & Sons Foods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
