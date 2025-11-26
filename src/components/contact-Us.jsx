import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact-section" className="bg-blue-900 text-white pt-12 pb-8">

      {/* GRID = 3 COLUMNS ON DESKTOP / STACK ON MOBILE */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1️⃣ LOGO CARD */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/SunandSons_Foods_Logo_JPG_02.png"
            className="w-42 h-42 hover:scale-105 transition mb-3"
          />
          <p className="text-[#003B8E] text-sm leading-relaxed">
            Bringing freshness, quality, and mutual growth with every product we deliver.
          </p>
        </div>

        {/* 2️⃣ LINKS + CONTACT + SOCIAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left items-start">

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-yellow-500">Quick Links</h4>
            <ul className="space-y-1 text-[#003B8E]">
              <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
              <li><Link to="/careers-page" className="hover:text-yellow-500 transition">Careers</Link></li>
              <li><Link to="/b2b" className="hover:text-yellow-500 transition">B2B Enquiry</Link></li>
            </ul>
          </div>

          {/* 🔥 Social icons (center column on larger screens) */}
          <div className="flex flex-col items-center sm:items-center">
            <h4 className="text-lg font-semibold mb-2 text-yellow-500">Follow Us</h4>
            <div className="flex justify-center gap-5 text-[#003B8E] text-3xl">
              <a href="https://www.instagram.com/sunandsonsfoods?igsh=MWkxZ3docTRqeHI3ZQ==" target="_blank" className="hover:text-yellow-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-500"><FaFacebook /></a>
            </div>
          </div>

          {/* Contact at the end */}
          <div style={{width:"300px",}}>
            <h4 className="text-lg font-semibold mb-2 text-yellow-500">Contact Us</h4>
            <ul className="space-y-1 text-[#003B8E] text-sm">
              <li>Email: sunandsonsfoods@gmail.com</li>
              <li>Phone: +91 78798 67530</li>
              <li>Indore, Madhya Pradesh</li>
            </ul>
          </div>

        </div>


        {/* 3️⃣ VIDEO stays as it is */}
        <div className="text-center flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-yellow-500">Our Journey</h4>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-52 rounded-xl shadow-lg object-cover"
          >
            <source src="/img/map_video.mp4" type="video/mp4" />
          </video>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-blue-700 pt-4 text-center text-blue-200 text-sm">
        © {new Date().getFullYear()} Sun & Sons Foods. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
