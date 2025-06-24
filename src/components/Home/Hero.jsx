// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero-bg1.jpg"; // You can replace with actual image

function Hero() {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center text-white"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroImage})`,
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="z-10 px-4 text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Welcome to <span className="text-accent">SVS Computers</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Empowering Students with Quality Computer Education Since 2008
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-accent/90"
        >
          Apply Now
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
