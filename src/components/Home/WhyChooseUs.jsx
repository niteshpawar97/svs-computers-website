import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WhyChooseUs() {
  const items = [
    {
      title: "Certified Programs",
      description:
         "ISO 9001:2008 certified courses designed to meet global industry standards.",
      details: [
        "Internationally recognized certification",
        "Industry-relevant curriculum updates",
        "Enhances employability and career prospects",
      ],
    },
    {
      title: "Experienced Faculty",
      description:
              "Learn from industry experts with years of teaching and field experience.",
      details: [
        "Years of industry and teaching experience",
        "Personalized mentorship and guidance",
        "Focus on real-world applications and examples",
      ],
    },
    {
      title: "State-of-the-Art Labs",
      description:
        "Modern, high-performance labs with up-to-date tools for immersive learning.",
      details: [
        "Latest hardware and software technologies",
        "Hands-on with industry-standard tools",
        "24/7 lab access for flexible learning",
      ],
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum balances foundational and advanced IT topics, updated regularly with tech trends.",
      details: [
        "Wide subject coverage",
        "Role-oriented preparation",
        "Theory + practical integration",
      ],
    },
    {
      title: "Placement Assistance",
      description:
        "We support students with job placement, resume building and interview prep.",
      details: [
        "Tie-ups with top companies",
        "Interview coaching",
        "Real internship exposure",
      ],
    },
    {
      title: "Flexible Learning Options",
      description:
        "Evening/weekend batches and online support for flexible study.",
      details: [
        "Schedule flexibility",
        "E-learning resources",
        "Self-paced learning options",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section id="why-choose-us" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8 text-primary">Why Choose Us?</h3>

        <div className="relative bg-gray-50 rounded-xl shadow-xl p-6 sm:p-8 transition-all">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="text-2xl font-semibold text-accent mb-2">{items[currentIndex].title}</h4>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                {items[currentIndex].description}
              </p>
              <ul className="text-left list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                {items[currentIndex].details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-primary scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
