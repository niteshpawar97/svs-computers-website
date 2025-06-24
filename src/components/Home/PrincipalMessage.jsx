// src/components/Home/PrincipalMessage.jsx
import React from "react";
import principalImage from "../../assets/images/principal.jpg";

function PrincipalMessage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <img
          src={principalImage}
          alt="Principal"
          className="w-64 h-80 object-cover rounded-lg shadow"
        />
        <div>
          <h3 className="text-3xl font-semibold text-primary mb-4">Principal's Message</h3>
          <p className="text-gray-700 leading-relaxed">
            Welcome to SVS Computers! Our goal is to provide quality computer education
            that shapes the future of our students. We are committed to nurturing young minds
            with practical skills and knowledge. I invite you to explore our courses and
            experience the transformation in your career.
          </p>
          <p className="mt-4 font-bold text-accent">- Mr. Shirish Smarth, Principal / Director </p>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
