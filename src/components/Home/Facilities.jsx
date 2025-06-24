import React from "react";
import { motion } from "framer-motion";

function Facilities() {
  const facilities = [
    {
      title: "Modern Computer Labs",
      description:
        "Equipped with latest systems and software to give students practical hands-on exposure in a real-world-like environment.",
    },
    {
      title: "Well-Stocked Library",
      description:
        "Comprehensive collection of IT books, reference materials, and digital content with peaceful reading space.",
    },
    {
      title: "Experienced Faculty",
      description:
        "Qualified mentors with industry and academic experience who ensure deep conceptual clarity and guidance.",
    },
    {
      title: "Hands-on Practice",
      description:
        "Live projects, case studies, and practical sessions ensure students apply their knowledge in real scenarios.",
    },
  ];

  return (
    <section id="facilities" className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-12 text-primary">
          Our <span className="bg-yellow-100 px-2 py-1 rounded">Facilities</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg text-left hover:shadow-xl transition-all"
            >
              <h4 className="text-xl font-semibold text-primary mb-3">
                {facility.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
