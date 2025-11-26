import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    review:
      "Really happy with the quality of the skimmed milk powder. Packaging is neat, delivery is fast, and service is friendly. Definitely a trusted supplier!",
  },
  {
    name: "Deepak patel",
    review:
      "मैं पिछले एक साल से Whey powder इन्हीं से ले रहा हूँ। प्रोडक्ट की क्वालिटी और पैकिंग दोनों ही बेहतरीन हैं। डिलीवरी समय पर मिल जाती है।",
  },
  {
    name: "Rajendra Yadav",
    review:
      "This company has become our go-to supplier for bulk SMP orders. Deliveries are always on schedule, packaging is secure, and the quality is outstanding every time.",
  },
  {
    name: "Amit Patel",
    review:
      "We use their skimmed milk powder in bakery and confectionery products. The texture and solubility are excellent, giving us consistently good results.",
  },
  {
    name: "Surendra Yadav",
    review:
      "Impressed with the fast turnaround times and customer service. They handled our urgent order smoothly and delivered earlier than expected.",
  },
  {
    name: "Vikas Yadav",
    review:
      "We’ve been sourcing skimmed milk powder from this supplier for over a year, and the quality has always been consistent. The powder dissolves well, has a clean taste, and works perfectly in our production line. Highly recommended!",
  },
  {
    name: "Govind Jaat",
    review:
      "इस सप्लायर का व्हे पर्मिएट पाउडर गुणवत्ता में बहुत अच्छी है — घुलनशीलता (solubility) बहुत बढ़िया और बैच बहुत कन्सिस्टेंट था।",
  },
  {
    name: "Sandeep Kumar",
    review:
      "Whey Permeate Powder has a long shelf life (up to 18 months in 25 kg bags) when stored properly. That’s very good for industrial buyers.",
  },
  {
    name: "Ravi shankar yadav",
    review:
      "बहुत संतुष्ट हूँ Sun & Sons Company से हुई डील से — छोटे बैच ऑर्डर पर भी तुरंत प्रतिसाद मिला, पैकिंग अच्छी थी। अगर आप स्किम्ड मिल्क पाउडर डीलर खोज रहे हैं, तो यह एक भरोसेमंद विकल्प है।",
  },
  {
    name: "Deepak Yadav",
    review:
      "डीलर का ग्राहक सेवा अनुभव बहुत अच्छा रहा — उन्होंने ऑर्डर के बाद फॉलोअप किया और भुगतान-प्रक्रिया सरल और स्पष्ट थी।",
  },
  {
    name: "Ravi Kumar",
    review:
      "मध्य प्रदेश के स्तर पर थोक सप्लायर के रूप में Sun & Sons ने उचित प्राइस पर अच्छा माल दिया। स्किम्ड मिल्क पाउडर का लेबल सही था, फेट की मात्रा कम थी जैसा वादा था। समय से डिलीवरी हुई!",
  },
  {
    name: "Rajesh Singh",
    review:
      "यह डीलर बहुत भरोसेमंद है — ऑर्डर हमेशा समय पर डिलीवर होता है और तेल की क्वालिटी स्थिर रहती है।",
  },
  {
    name: "Ajay Rathod",
    review:
      "ह डीलर लैक्टोज पाउडर की क्वालिटी बहुत अच्छी देता है — सफेद, फाइन ग्रेन्युलर पाउडर और बहुत अच्छी घुलनशीलता।",
  },
];

// Duplicate list to keep infinite scrolling smooth
const doubledTestimonials = [...testimonials, ...testimonials];

const SmallTestimonial = () => {
  return (
    <section id="testimonial-page" className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-6 text-center overflow-hidden mt-30">
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
            duration: 10,
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
