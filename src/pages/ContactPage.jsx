import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function ContactPage() {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-semibold text-primary text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We'd love to hear from you. Please reach out using the form below or visit us in person.
        </motion.p>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow text-gray-700"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhoneAlt className="text-accent mr-3" />
                <span>07162-246870, 9425146970</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-accent mr-3" />
                <span>info@svscomputers.co.in</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-accent mr-3" />
                <span>Vivekanand Colony, Old Nagpur Naka, Chhindwara, MP 480001</span>
              </li>
              <li className="flex items-start">
                <FaClock className="text-accent mr-3 mt-1" />
                <div>
                  <strong className="block text-gray-800">Office Hours</strong>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Embedded Google Map */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.1559183583418!2d78.92775728549219!3d22.043630400266725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd568ac4c853d11%3A0xb278579cda695bac!2sSVS%20Computers%20Chhindwara!5e0!3m2!1sen!2sin!4v1750771710416!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactPage;
