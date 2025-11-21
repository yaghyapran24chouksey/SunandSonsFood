import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home-page"
      className="pt-[120px] relative w-full h-[100vh] overflow-hidden"
    >
      {/* Background Image (ON TOP of the logo) */}
      <div className="absolute inset-0 z-20 pointer-events-none mt-70">
        <img
          src="/img/logo_up_backdground1.jpeg"
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Rising Logo (BEHIND the mountains, then rises above) */}
      <motion.img
        src="/SunandSons_Foods_Logo_JPG_01.png"
        alt="Rising Logo"
        initial={{ y: 420, opacity: 0.4, scale: 0.9 }}
        animate={{ y: -310, opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-64
          md:w-[380px]
          z-10
          pointer-events-none
        "
      />
    </section>
  );
};

export default Hero;
