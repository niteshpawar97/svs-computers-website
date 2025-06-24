import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-primary text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold tracking-wide"
          onClick={closeMenu}
        >
          SVS Computers
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/courses" className="hover:text-accent">Courses</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
          <Link to="/gallery" className="hover:text-accent">Gallery</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-4 pb-4 pt-2">
          <nav className="flex flex-col space-y-3 text-lg">
            <Link to="/" onClick={closeMenu} className="hover:text-accent">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-accent">About</Link>
            <Link to="/courses" onClick={closeMenu} className="hover:text-accent">Courses</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-accent">Contact</Link>
            <Link to="/gallery" className="hover:text-accent">Gallery</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
