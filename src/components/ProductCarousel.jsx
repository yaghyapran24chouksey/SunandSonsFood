import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    img: "/img/Carouselimg1.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi rem magnam nesciunt minima placeat...",
  },
  {
    img: "/img/Carouselimg2.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "NATURE",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi rem magnam nesciunt minima placeat...",
  },
  {
    img: "/img/Carouselimg3.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "WILDLIFE",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi rem magnam nesciunt minima placeat...",
  },
  {
    img: "/img/Carouselimg2.png",
    author: "LUNDEV",
    title: "DESIGN SLIDER",
    topic: "SEA",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi rem magnam nesciunt minima placeat...",
  },
];

export default function CarouselA() {
  const [slides, setSlides] = useState(slidesData);
  const [direction, setDirection] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    startAuto();
    return () => clearTimeout(timeoutRef.current);
  }, [slides]);

  function startAuto() {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5500);
  }

  function handleNext() {
    setDirection(1);
    setSlides((prev) => {
      const first = prev[0];
      return [...prev.slice(1), first];
    });
  }

  function handlePrev() {
    setDirection(-1);
    setSlides((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  }

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      scale: direction === 1 ? 1.1 : 0.9,
      x: direction === 1 ? 200 : -200,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 1 ? -200 : 200,
      scale: direction === 1 ? 0.9 : 1.1,
    }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      <AnimatePresence custom={direction}>
        <motion.div
          key={slides[0].img}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[0].img}
            className="w-full h-full object-cover absolute inset-0"
          />

          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] max-w-[1140px] text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="tracking-[12px] font-bold"
            >
              {slides[0].author}
            </motion.div>

            <motion.div
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              {slides[0].title}
            </motion.div>

            <motion.div
              className="text-6xl font-bold text-orange-500"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              {slides[0].topic}
            </motion.div>

            <motion.div
              className="max-w-[60%] mt-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              {slides[0].des}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-white/30 rounded-full hover:bg-white hover:text-black transition"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-white/30 rounded-full hover:bg-white hover:text-black transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
