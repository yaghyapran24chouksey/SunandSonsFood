import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Abhimanyu Singh",
    review:
      "Really happy with the quality of the skimmed milk powder. Packaging is neat, delivery is fast, and service is friendly. Definitely a trusted supplier!",
  },
  {
    name: "Jayant Pawar",
    review:
      "मैं पिछले एक साल से Whey powder इन्हीं से ले रहा हूँ। प्रोडक्ट की क्वालिटी और पैकिंग दोनों ही बेहतरीन हैं। डिलीवरी समय पर मिल जाती है।",
  },
  {
    name: "Priya Nair",
    review:
      "Loved the freshness and texture! Highly recommended for health-conscious families.",
    // image: "/img/user3.jpg",
  },
  {
    name: "Amit Patel",
    review:
      "High quality & great taste! I always order Sun & Sons products for my family.",
    // image: "/img/user4.jpg",
  },
  {
    name: "Sneha Gupta",
    review:
      "The best in the market. Super fast delivery and perfect freshness!",
    // image: "/img/user5.jpg",
  },
  {
    name: "Vikas Yadav",
    review:
      "Premium products with great packaging. Worth every rupee!",
    // image: "/img/user6.jpg",
  },
  {
    name: "Meera Joshi",
    review:
      "My kids love their almonds! Clean, fresh and tasty.",
    // image: "/img/user7.jpg",
  },
  {
    name: "Sandeep Kumar",
    review:
      "Highly trustworthy brand. Recommend for everyone!",
    // image: "/img/user8.jpg",
  },
  {
    name: "Kritika Sharma",
    review:
      "These products are part of our daily diet now! Absolutely amazing.",
    // image: "/img/user9.jpg",
  },
];

// Duplicate list to keep infinite scrolling smooth
const doubledTestimonials = [...testimonials, ...testimonials];

const SmallTestimonial = () => {
  return (
    <section id="testimonial-page" className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-6 text-center overflow-hidden">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-blue-700 mb-10 max-w-xl mx-auto">
          Real stories from people who trust <strong>Sun & Sons Foods</strong>
        </p>

        {/* Infinite Scrolling Wrapper */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {doubledTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 border border-blue-100 hover:shadow-xl min-w-[300px] transition"
            >
              <div className="flex flex-col items-center">
                <p className="text-gray-700 italic text-sm mb-3">
                  “{t.review}”
                </p>
                <h4 className="text-blue-900 font-semibold text-lg">
                  {t.name}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SmallTestimonial;
