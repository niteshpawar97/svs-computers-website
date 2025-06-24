import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <motion.div
        className="container mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="SVS Logo" className="w-32 mb-4" />
          <p className="text-gray-300 text-sm text-center md:text-left">
            We provide quality computer education to equip students with the skills to excel in the IT industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/courses" className="hover:text-accent">Courses</a></li>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-accent">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-accent mt-1" />
              <span>07162-246870, 9425146970</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-accent mt-1" />
              <span>info@svscomputers.co.in</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-accent mt-1" />
              <span>Vivekanand Colony, Old Nagpur Naka, Chhindwara, MP 480001</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4 text-accent">Social Contact</h4>
          <p className="text-gray-300 text-sm mb-4">
            If you have any questions, feel free to reach out to us on social media.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-accent hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-accent hover:text-white transition" />
            </a>
            <a href="https://wa.me/918821861409" target="_blank" rel="noreferrer">
              <FaWhatsapp className="text-accent hover:text-white transition" />
            </a>
            <a href="https://justdial.com" target="_blank" rel="noreferrer">
              <FaLink className="text-accent hover:text-white transition" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm px-4">
        <p>© {currentYear} SVS Computers | All rights reserved</p>
        <p>
          Designed & Developed by{" "}
          <a href="https://niketgroup.in" className="text-accent font-medium hover:underline">Niket Group</a> ❤️
        </p>
        <p>
          Powered by{" "}
          <a href="https://niketgroup.in" className="text-accent hover:underline">NiketGroup.in</a> Hosting ☁️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
