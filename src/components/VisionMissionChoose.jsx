import { motion } from "framer-motion";
import React from "react";

export default function VisionMissionValues() {
  const items = [
    {
      icon: "/img/Visionimg.png",
      title: "Vision",
      text: "Our vision is to guarantee consumer satisfaction through the consistent delivery of quality and value. Simultaneously, we aim to empower our farmers, fostering self-dependence and happiness among them.",
      delay: 0.6,
    },
    {
      icon: "/img/Missionimg.png",
      title: "Mission",
      text: "Our mission is to empower farmers to efficiently produce premium dairy products, establishing ourselves as a cherished brand for consumers, envied by competitors, and valued by shareholders.",
      delay: 0.8,
    },
    {
      icon: "/img/chooseimg.png",
      title: "Values",
      text: "We adhere to the core values of farmer-centric commitment, quality assurance, community partnership, integrity, and innovation in all our undertakings. We aim for exceptional customer service in every aspect of our operations.",
      delay: 1.0,
    },
  ];

  return (
    <div className="bg-white py-28">
      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-20">

        {items.map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: box.delay }}
            className="relative flex flex-col items-center"
          >
            {/* ICON IMAGE */}
            <div className="w-40 h-40 absolute -top-20 z-20">
              <img
                src={box.icon}
                alt={box.title}
                className="w-full h-full object-contain "
              />
            </div>

            {/* CARD BOX */}
            <div className="bg-[#003B8E] text-white rounded-3xl pt-28 pb-10 px-10 text-center shadow-xl min-h-[400px] flex flex-col justify-start">
              <h3 className="text-4xl font-bold mb-6">{box.title}</h3>
              <p className="text-white/90 text-lg leading-relaxed tracking-wide">
                {box.text}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
