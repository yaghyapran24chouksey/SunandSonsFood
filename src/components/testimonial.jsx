import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anjali Verma",
    review:
      "Sun & Sons Foods never disappoints! Their dry fruits are always fresh and perfectly packed.",
    image: "/img/user1.jpg",
  },
  {
    name: "Rohit Sharma",
    review:
      "Excellent quality and service. The taste, the packaging — everything feels premium.",
    image: "/img/user2.jpg",
  },
  {
    name: "Priya Nair",
    review:
      "Loved the freshness and texture! Highly recommended for health-conscious families.",
    image: "/img/user3.jpg",
  },
];

const SmallTestimonial = () => {
  return (
    <section id="testimonial-page" className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Customers Say</h2>
        <p className="text-blue-700 mb-10 max-w-xl mx-auto">
          Real stories from people who trust <strong>Sun & Sons Foods</strong>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-300"
                />
                <p className="text-gray-700 italic text-sm mb-3">
                  “{t.review}”
                </p>
                <h4 className="text-blue-900 font-semibold text-lg">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallTestimonial;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "Anjali Verma",
//     location: "Mumbai",
//     image: "/img/user1.jpg",
//     review:
//       "Sun & Sons Foods has the best quality products I’ve ever tried. Their dry fruits are so fresh and flavorful — I absolutely love it!",
//     rating: 5,
//   },
//   {
//     name: "Rohit Sharma",
//     location: "Delhi",
//     image: "/img/user2.jpg",
//     review:
//       "Amazing service and fast delivery! The packaging was neat, and every product felt premium. Highly recommended!",
//     rating: 4.5,
//   },
//   {
//     name: "Priya Nair",
//     location: "Bangalore",
//     image: "/img/user3.jpg",
//     review:
//       "The variety is outstanding! Their seeds and nuts are fresh and perfectly roasted. I’ll definitely order again.",
//     rating: 5,
//   },
// ];

// const TestimonialSection = () => {
//   return (
//     <section className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-20">
//       <div className="container mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-blue-900 mb-6"
//         >
//           Voices of Trust
//         </motion.h2>
//         <p className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto">
//           Hear what our happy customers say about <strong>Sun & Sons Foods</strong>
//         </p>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           className="max-w-4xl mx-auto"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-lg p-10 mx-4 relative"
//               >
//                 <motion.img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-300 shadow-md"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.6 }}
//                 />

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <p className="text-gray-700 italic text-lg mb-6">
//                     “{t.review}”
//                   </p>

//                   <h4 className="text-blue-900 font-semibold text-xl">
//                     {t.name}
//                   </h4>
//                   <p className="text-blue-700 text-sm mb-2">{t.location}</p>

//                   <div className="flex justify-center gap-1">
//                     {Array.from({ length: Math.floor(t.rating) }).map((_, idx) => (
//                       <span key={idx}>⭐</span>
//                     ))}
//                     {t.rating % 1 !== 0 && <span>⭐½</span>}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
