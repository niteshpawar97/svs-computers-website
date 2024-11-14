// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919425146970" // WhatsApp link with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 mt-1"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}

export default WhatsAppButton;
