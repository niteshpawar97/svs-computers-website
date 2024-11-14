// src/components/ContactForm.js
import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto">
        <h3 className="text-4xl font-semibold text-center mb-8">Contact Us</h3>
        <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <label className="block mb-4">
            <span className="text-secondary">Your Name</span>
            <input type="text" className="mt-1 block w-full border border-gray-300 p-2 rounded" />
          </label>
          <label className="block mb-4">
            <span className="text-secondary">Email Address</span>
            <input type="email" className="mt-1 block w-full border border-gray-300 p-2 rounded" />
          </label>
          <label className="block mb-4">
            <span className="text-secondary">Message</span>
            <textarea className="mt-1 block w-full border border-gray-300 p-2 rounded" rows="4"></textarea>
          </label>
          <button className="bg-primary text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
