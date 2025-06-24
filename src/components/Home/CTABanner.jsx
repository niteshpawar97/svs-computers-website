// src/components/CTABanner.js
import React from "react";
import { Link } from "react-router-dom";

function CTABanner() {
  return (
    <section className="bg-accent text-white py-10 text-center px-4">
      <h3 className="text-3xl font-bold mb-3">Admissions Open 2024-25</h3>
      <p className="text-lg mb-5">Enroll now to build your future with SVS Computers.</p>
      <Link
        to="/contact"
        className="bg-white text-accent font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
      >
        Contact Now
      </Link>
    </section>
  );
}

export default CTABanner;
