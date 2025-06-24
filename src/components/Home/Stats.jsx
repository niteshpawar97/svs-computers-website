// src/components/Stats.js
import React from "react";
import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { label: "Students Trained", value: "1500+" },
    { label: "Courses Offered", value: "20+" },
    { label: "Years of Excellence", value: "15+" },
    { label: "Placement Rate", value: "95%" },
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Our Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-accent">{stat.value}</p>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
