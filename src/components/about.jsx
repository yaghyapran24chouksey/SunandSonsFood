import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import VisionMissionValues from "./VisionMissionChoose";

const About = () => {
  return (
    <section className="bg-white text-blue-900" id="about-page">
      {/* --- Section 1: Intro --- */}
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src="/img/about-food.jpg"
            alt="Sun & Sons Foods"
            className="rounded-2xl shadow-xl border-4 border-blue-100 hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Right: Content */}
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
            At <span className="font-semibold text-blue-700">Welcome to Sun and Sons Foods — Your Trusted Partner in Dairy Ingredients</span>, At
            Sun and Sons Foods, we take pride in being a leading dealer and distributor of premium dairy ingredients, specializing in Skimmed Milk Powder, Whey Powder, and Whey Permeate from reputed national and international brands.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            With a commitment to quality, reliability, and customer satisfaction, 
            we have built lasting relationships with food manufacturers, confectionery producers, 
            bakeries, and nutritional product companies across the region. Our products are sourced from 
            trusted brands known for their purity, consistency, and superior performance in diverse applications.
          </p>

          {/* <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 shadow-md hover:shadow-lg transition"
          >
            Learn More
          </motion.a> */}
        </motion.div>
      </div>

      {/* --- Section 2: Mission, Vision & Why Choose us--- */}
      <VisionMissionValues />

      {/* --- Section 3: Highlights --- */}
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { end: 20, label: "Years of Experience" },
            { end: 100, label: "Trusted Partners" },
            { end: 500, label: "Happy Clients" },
          ].map((item, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 + index * 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-100 transition"
                whileHover={{ scale: 1.07, y: -8 }}
              >
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex justify-center items-baseline gap-1"
                >
                  <h4 className="text-4xl font-bold text-blue-600 mb-2">
                    {inView && (
                      <CountUp
                        start={0}
                        end={item.end}
                        duration={2.5}
                        suffix="+"
                      />
                    )}
                  </h4>
                </motion.div>
                <p className="text-gray-700">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
