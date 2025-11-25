import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-3">

        {/* Logo */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100 min-w-[300px] transition" style={{height:"250px",width:"420px"}}>
          <div className="flex items-center justify-center mb-4">
            <img
              src="/SunandSons_Foods_Logo_JPG_02.png"
              alt="Sun & Sons Foods"
              className="w-40 h-40 hover:scale-105 transition -mt-5 -mb-5"
            />
          </div>
          <p className="text-[#003B8E] text-sm leading-relaxed">
            Bringing freshness, quality, and mutual growth to every product we deliver.
          </p>
        </div>

        <div className="relative flex bg-white shadow-md rounded-2xl p-6 border border-blue-100 min-w-[300px] gap-6 items-start" style={{width:"440px"}}>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2 text-[#003B8E]">
              <li><Link to="/herosection" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/careers-page" className="hover:text-yellow-400 transition">Careers</Link></li>
              <li><Link to="/b2b" className="hover:text-yellow-400 transition">B2B Enquiry</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Us</h4>
            <ul className="space-y-2 text-[#003B8E]">
              <li>Email: sunandsonsfoods@gmail.com</li>
              <li>Phone: +91 78798 67530</li>
              <li>Address: Dawa Bazar, Indore, India</li>
            </ul>
          </div>

          {/* Social (positioned in lower-right of white box) */}
          <div className="absolute right-83 bottom-6 text-left">
            <h4 className="text-lg font-semibold mb-2 text-yellow-500">Follow Us</h4>
            <div className="flex gap-4 text-2xl text-[#003B8E]">
              <a href="https://www.instagram.com/sunandsonsfoods?igsh=MWkxZ3docTRqeHI3ZQ==" className="hover:text-yellow-400 transition text-2xl"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaFacebook /></a>
              {/* <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaLinkedin /></a>
              <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaWhatsapp /></a> */}
            </div>
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
