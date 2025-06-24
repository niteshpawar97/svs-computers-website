// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react"; // Optional icons (install lucide-react)

function About() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          About Us
        </h3>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700">
          SVS Computers is an ISO 9001:2008 certified institution in Chhindwara, MP. We specialize in high-quality computer education, offering diverse programs to equip students with the latest industry skills and knowledge.
        </p>

        {/* Vision & Mission Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {/* Vision Card */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-left max-w-md w-full"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="text-accent w-6 h-6" />
              <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
            </div>
            <p className="text-gray-600">
              To create a learning environment that fosters innovation and professional growth.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-left max-w-md w-full"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-accent w-6 h-6" />
              <h4 className="text-xl font-semibold text-gray-800">Our Mission</h4>
            </div>
            <p className="text-gray-600">
              To offer quality education and help students build successful careers in technology.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
