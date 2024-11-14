// src/components/Footer.js
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaLink } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        
        {/* Logo and Description Section */}
        <div className="col-span-1 flex flex-col items-center">
          <img src={logo} alt="SVS Computers Logo" className="w-36 h-24 mb-4" />
          <p className="text-center text-gray-300">
            We provide quality computer education to equip students with the skills to excel in the IT industry.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#courses" className="hover:text-accent">Courses</a></li>
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact Us</a></li>
            <li><a href="#privacy-policy" className="hover:text-accent">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center"><FaPhoneAlt className="mr-2 text-accent" /> 07162-246870, 9425146970</li>
            <li className="flex items-center"><FaEnvelope className="mr-2 text-accent" /> info@svscomputers.co.in</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-accent" /> Vivekanand Colony, Old Nagpur Naka, Chhindwara, MP 480001</li>
          </ul>
        </div>

        {/* Social Contact Section */}
        <div className="col-span-1 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4 text-accent">Social Contact</h4>
          <p className="text-center text-gray-300 mb-4">
            If you have any questions, feel free to reach out to us on social media.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-accent text-2xl hover:text-gray-400" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-accent text-2xl hover:text-gray-400" /></a>
            <a href="https://wa.me/918821861409" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-accent text-2xl hover:text-gray-400" /></a>
            <a href="https://justdial.com" target="_blank" rel="noopener noreferrer"><FaLink className="text-accent text-2xl hover:text-gray-400" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4 mt-6 text-center text-gray-400">
        <p>Copyright © {currentYear} SVS Computers | All rights reserved</p>
        <p>
          Designed & Developed by <a href="https://niketgroup.com" className="font-semibold text-accent hover:underline">Niket Group</a> ❤️
        </p>
        <p>
          Powered by <a href="https://niketgroup.com" className="text-accent hover:underline">NiketGroup.com</a> Hosting ☁️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
