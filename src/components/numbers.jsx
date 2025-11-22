import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Numbers() {
  const stats = [
    { end: 20, label: "Years of Experience" },
    { end: 100, label: "Trusted Partners" },
    { end: 500, label: "Happy Clients" },
  ];

  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {stats.map((item, index) => {
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
  );
}
