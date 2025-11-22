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
      <a
        href="https://wa.me/919770526057"
        target="_blank"
        className="fixed right-20 top-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-50"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* LEFT LOGO */}
      <div className="absolute left-[40px] top-[-70px] flex items-center">
        <div className="absolute w-48 h-48 rounded-full"></div>
        <img
          src="/SunandSons_Foods_Logo_JPG_01.png"
          alt="Logo"
          className="w-36 md:w-60 object-contain drop-shadow-lg"
        />
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex justify-center">
        <div className="rounded-full px-12 py-4 bg-[#003B8E] border border-white/40 shadow-xl flex items-center gap-14 text-white backdrop-blur-md">

          <ul className="flex items-center gap-12">

            {/* HOME → scroll */}
            <li><a href="#home-page" className="nav-item">Home</a></li>

            {/* ABOUT → scroll */}
            <li><a href="#about-page" className="nav-item">About</a></li>

            {/* PRODUCT DROPDOWN → real pages */}
            <li className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="nav-item flex items-center gap-1"
              >
                Product
                <ChevronDown size={14} />
              </button>

              {openDropdown && (
                <div className="absolute left-0 top-8 bg-white shadow-xl rounded-xl p-3 w-40">
                  <Link to="/products/seeds" className="dropdown-item">Seeds</Link>
                  <Link to="/products/snacks" className="dropdown-item">Snacks</Link>
                  <Link to="/products/oils" className="dropdown-item">Oils</Link>
                  <Link to="/products/dry-fruits" className="dropdown-item">Dry Fruits</Link>
                </div>
              )}
            </li>

            {/* CAREERS → scroll */}
            <li><a href="#blog-page" className="nav-item">Blog</a></li>

            {/* B2B → scroll */}
            <li><a href="#testimonial-page" className="nav-item">Testimonials</a></li>

            {/* CONTACT → scroll */}
            <li><a href="#contactus-page" className="nav-item">Contact Us</a></li>

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

          <a href="#home-page" className="mobile-item">Home</a>
          <a href="#about-page" className="mobile-item">About</a>

          <button
            className="mobile-item flex justify-between w-full"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Product <ChevronDown size={16} />
          </button>

          {openDropdown && (
            <div className="ml-4 space-y-2">
              <Link to="/products/seeds" className="dropdown-mobile">Seeds</Link>
              <Link to="/products/snacks" className="dropdown-mobile">Snacks</Link>
              <Link to="/products/oils" className="dropdown-mobile">Oils</Link>
              <Link to="/products/dry-fruits" className="dropdown-mobile">Dry Fruits</Link>
            </div>
          )}

          <a href="#blog-page" className="mobile-item">Blogs</a>
          <a href="#testimonial-page" className="mobile-item">Testimonials</a>
          <a href="#contactus-page" className="mobile-item">Contact Us</a>

        </div>
      )}

    </nav>
  );
}
