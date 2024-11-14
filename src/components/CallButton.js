// src/components/CallButton.js
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function CallButton() {
  return (
    <a
      href="tel:+919425146970" // Phone link with your number
      className="fixed bottom-20 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 mb-1"
    >
      <FaPhoneAlt className="text-2xl" />
    </a>
  );
}

export default CallButton;
