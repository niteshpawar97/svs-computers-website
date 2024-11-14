// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-primary text-white py-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">SVS Computers</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#courses" className="hover:underline">Courses</a>
          <a href="#why-choose-us" className="hover:underline">Why Choose Us?</a>
          <a href="#facilities" className="hover:underline">Facilities</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
