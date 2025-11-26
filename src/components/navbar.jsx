import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">

      {/* FLOATING WHATSAPP BUTTON */}
      {/* WHATSAPP BUTTON (Responsive) */}
      <a
        href="https://wa.me/919770526057?text=Hi!%20I'm%20interested%20in%20your%20products."
        target="_blank"
        className="
    fixed z-[100] text-white p-4 rounded-full shadow-xl hover:scale-110 duration-300

    bg-green-500

    bottom-5 right-5       /* Mobile Position */
    md:bottom-auto md:top-6 md:right-20   /* Desktop Position */
  "
      >
        <FaWhatsapp size={24} />
      </a>

      {/* LEFT LOGO */}
      <div className="absolute left-[20px] top-[-65px] flex items-center">
        <div className="absolute w-48 h-48 rounded-full"></div>
        <Link to="/">
          <img
            src="/SunandSons_Foods_Logo_JPG_01.png"
            alt="Logo"
            className="w-45 md:w-60 object-contain drop-shadow-lg hover:scale-115 transition"
          />
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex justify-center">
        <div className="rounded-full px-12 py-4 bg-[#003B8E] border border-white/40 shadow-xl flex items-center gap-14 text-white backdrop-blur-md">

          <ul className="flex items-center gap-12">

            {/* HOME → scroll */}
            {/* <li><Link to="/herosection" className="nav-item">Home</Link></li> */}

            {/* ABOUT → scroll */}
            <li><Link to="/about" className="nav-item">About</Link></li>

            {/* PRODUCT DROPDOWN → real pages */}
            <li><Link to="/productCarousel" className="nav-item">Product</Link></li>

            {/* CAREERS → scroll */}
            <li><Link to="/blogPage" className="nav-item">Blogs</Link></li>

            {/* B2B → scroll */}
            <li><Link to="/testimonial" className="nav-item">Testimonial</Link></li>

            {/* CONTACT → scroll */}
            <li>
              <button
                onClick={() => {
                  document.getElementById("contact-section").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="nav-item"
              >
                Contact Us
              </button>
            </li>

          </ul>

        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="md:hidden flex justify-end px-6">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white/70 backdrop-blur-md shadow-lg rounded-xl mx-4 p-4">

          {/* <a href="#home-page" className="mobile-item">Home</a> */}
          <li><Link to="/about" className="mobile-item">About</Link></li>
          <li><Link to="/productCarousel" className="mobile-item">Product</Link></li>
          <li><Link to="/blogPage" className="mobile-item">Blogs</Link></li>
          <li><Link to="/testimonial" className="mobile-item">Testimonial</Link></li>
          <li>
            <button
              onClick={() => {
                document.getElementById("contact-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="mobile-item"
            >
              Contact Us
            </button>
          </li>

        </div>
      )}

    </nav>
  );
}
