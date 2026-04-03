import { FaPhoneAlt } from 'react-icons/fa';

function CallButton() {
  return (
    <div className="fixed bottom-24 right-6 z-50 group">
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
        Call Us
      </div>
      <a
        href="tel:+919425146970"
        className="relative flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600"
        aria-label="Call Us"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
        <FaPhoneAlt className="text-xl z-10" />
      </a>
    </div>
  );
}

export default CallButton;
