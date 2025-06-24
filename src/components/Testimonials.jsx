import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    feedback: "SVS Computers helped me build a strong foundation in IT.",
    program: "Bachelor of Computer Applications (BCA)",
    year: "Class of 2022",
  },
  {
    name: "Priya Singh",
    feedback: "The faculty here is amazing and very supportive.",
    program: "Diploma in Computer Applications (DCA)",
    year: "Class of 2021",
  },
  {
    name: "Amit Sharma",
    feedback:
      "The hands-on labs and modern facilities at SVS Computers prepared me well for my career.",
    program: "Post Graduate Diploma in Computer Applications (PGDCA)",
    year: "Class of 2020",
  },
  {
    name: "Neha Patel",
    feedback:
      "The placement assistance was incredibly helpful in getting my first job in IT.",
    program: "Advanced Excel Certification",
    year: "Class of 2023",
  },
  {
    name: "Vikram Verma",
    feedback:
      "SVS Computers offers a perfect balance of theory and practical knowledge.",
    program: "Master of Science in Computer Science (M.Sc. CS)",
    year: "Class of 2021",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10 text-primary">
          What Our Students Say
        </h3>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "{testimonials[currentIndex].feedback}"
              </p>
              <h4 className="text-primary text-xl font-semibold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-600">
                {testimonials[currentIndex].program}
              </p>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].year}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-primary scale-110" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
