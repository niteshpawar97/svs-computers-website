import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </div>
      <a
        href="https://wa.me/919425146970?text=Hi%2C%20I%27m%20interested%20in%20SVS%20Computers%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <FaWhatsapp className="text-2xl z-10" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
