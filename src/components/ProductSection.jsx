/*
CategoryCarousel.jsx
Updated: manual-only scrolling (auto-scroll removed)

Features:
- Manual horizontal scroll (drag or scroll wheel)
- Tooltip shows on hover
- Modal for category details

Dependencies: Tailwind CSS + Framer Motion
Run: npm i framer-motion
*/

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultCategories = [
  { id: 1, name: "Snacks & Treats", tagline: "Crispy. Crunchy. Delightful.", description: "Explore a variety of snacks that bring flavor and fun to every bite.", color: "#3B82F6", image: "/images/snacks.png" },
  { id: 2, name: "Beverages", tagline: "Refreshing. Energizing. Natural.", description: "From fresh juices to sparkling sips, explore our beverage collections.", color: "#60A5FA", image: "/images/beverages.png" },
  { id: 3, name: "Spices & Condiments", tagline: "Add Flavor to Life.", description: "Handpicked spices and condiments that add aroma and zest to every meal.", color: "#1E40AF", image: "/images/spices.png" },
  { id: 4, name: "Organic Staples", tagline: "Healthy Choices for Every Day.", description: "Pure, organic essentials sourced sustainably for your wellbeing.", color: "#2563EB", image: "/images/organic.png" },
  // { id:ok 5, name: "Bakery & Bites", tagline: "Freshly Baked Everyday.", description: "Soft breads, muffins, and cookies baked to perfection.", color: "#60A5FA", image: "/images/bakery.png" },
  // { id: 6, name: "Cakes & Celebrations", tagline: "Make Every Moment Sweet.", description: "Custom cakes and celebration goodies for every milestone.", color: "#3B82F6", image: "/images/cakes.png" },
];

export default function CategoryCarousel({ categories = defaultCategories }) {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const carouselRef = useRef(null);

  // Manual scroll with drag gesture
  const handlePointerDown = (e) => {
    const el = carouselRef.current;
    if (!el) return;
    const startX = e.clientX || e.touches?.[0]?.clientX;
    const startScroll = el.scrollLeft;

    const onMove = (ev) => {
      const clientX = ev.clientX || ev.touches?.[0]?.clientX;
      const dx = clientX - startX;
      el.scrollLeft = startScroll - dx;
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Explore Our Categories</h2>
          <p className="text-gray-500 mt-2">Click any category to know more</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-6 px-2 cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
          >
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                onClick={() => setSelected(cat)}
                onHover={() => setHovered(cat.id)}
                onLeave={() => setHovered(null)}
                isHovered={hovered === cat.id}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selected && <CategoryModal cat={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CategoryCard({ cat, onClick, onHover, onLeave, isHovered }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative bg-white rounded-2xl shadow-md p-5 w-[240px] flex-shrink-0 cursor-pointer overflow-visible transition-transform transform hover:scale-105"
    >
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, #E0F2FE, ${cat.color})` }}
      >
        <img src={cat.image} alt={cat.name} className="w-20 h-20 object-contain" />
      </div>

      <div className="pt-20 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{cat.tagline}</p>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            {cat.name} — Click to view details →
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryModal({ cat, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="absolute inset-0 bg-black/40" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

      <motion.div className="relative bg-white rounded-t-2xl md:rounded-2xl w-full md:max-w-4xl max-h-[92vh] overflow-auto shadow-2xl" initial={{ y: 300 }} animate={{ y: 0 }} exit={{ y: 300 }} transition={{ type: "spring", stiffness: 160, damping: 22 }}>
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full w-9 h-9 flex items-center justify-center bg-white shadow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 18M6 18L18 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6">
          <div className="md:w-1/2 flex items-center justify-center rounded-lg p-6" style={{ background: `linear-gradient(135deg, #E0F2FE, ${cat.color}22)` }}>
            <img src={cat.image} alt={cat.name} className="w-64 h-64 object-contain" />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800">{cat.name}</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">{cat.description}</p>
            <button className="mt-6 px-5 py-3 rounded-lg font-medium text-white shadow-md hover:opacity-90 transition" style={{ background: `linear-gradient(135deg, #60A5FA, ${cat.color})` }}>
              Explore More
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
