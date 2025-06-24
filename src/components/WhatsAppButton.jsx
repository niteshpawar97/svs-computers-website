import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip on desktop hover */}
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
        Chat on WhatsApp
      </div>

      {/* Button with icon and pulse */}
      <a
        href="https://wa.me/919425146970"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
      >
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <FaWhatsapp className="text-xl z-10" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
