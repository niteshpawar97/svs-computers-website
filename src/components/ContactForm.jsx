import React from "react";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          className="text-4xl font-bold text-center text-primary mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h3>

        <motion.form
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactForm;
