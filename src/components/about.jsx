import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import VisionMissionChoose from "./VisionMissionChoose";

const About = () => {
  return (
    <>
      <section id="about-page" className="bg-white text-blue-900">

        {/* ================= Section 1: Vision ================= */}
        <div className="bg-[#E6F2FF] w-7xl  mt-20 mb-20 rounded-3xl shadow-xl  mx-auto px-30 py-20 flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Left Side: Blue Box with Icon */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 bg-blue-900 flex justify-center items-center rounded-3xl p-10 h-[350px]"
          >
            <img
              src="/img/Visionimg.png"
              alt="Vision Icon"
              className="w-2/3 md:w-1/2"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Sun & Sons Foods
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              At <span className="font-semibold text-blue-700">Sun & Sons Foods</span>, we
              believe that success thrives through mutual growth. Since our
              inception, we have been dedicated to delivering the finest quality
              food products with integrity, innovation, and sustainability.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              From sourcing fresh ingredients to building long-term relationships
              with partners and customers, our journey is built on trust and
              excellence. We aim to nourish not only with our products but also
              through our values.
            </p>
          </motion.div>
        </div>


        {/* ================= Section 2: Mission & Vision ================= */}
        <VisionMissionChoose />
      </section>
    </>
  );
};

export default About;
