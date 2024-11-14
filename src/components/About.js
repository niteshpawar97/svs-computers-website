// src/components/About.js
import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-4 text-primary">About Us</h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          SVS Computers is an ISO 9001:2008 certified institution in Chhindwara, MP. We specialize in high-quality computer education, offering diverse programs to equip students with the latest industry skills and knowledge.
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          <strong>Our Vision:</strong> To create a learning environment that fosters innovation and professional growth.
        </p>
        <p className="text-lg max-w-2xl mx-auto">
          <strong>Our Mission:</strong> To offer quality education and help students build successful careers in technology.
        </p>
      </div>
    </section>
  );
}

export default About;
