// src/components/Testimonials.js
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    feedback: "SVS Computers helped me build a strong foundation in IT.",
    program: "Bachelor of Computer Applications (BCA)",
    year: "Class of 2022",
  },
  {
    name: "Priya Singh",
    feedback: "The faculty here is amazing and very supportive.",
    program: "Diploma in Computer Applications (DCA)",
    year: "Class of 2021",
  },
  {
    name: "Amit Sharma",
    feedback: "The hands-on labs and modern facilities at SVS Computers prepared me well for my career.",
    program: "Post Graduate Diploma in Computer Applications (PGDCA)",
    year: "Class of 2020",
  },
  {
    name: "Neha Patel",
    feedback: "The placement assistance was incredibly helpful in getting my first job in IT.",
    program: "Advanced Excel Certification",
    year: "Class of 2023",
  },
  {
    name: "Vikram Verma",
    feedback: "SVS Computers offers a perfect balance of theory and practical knowledge.",
    program: "Master of Science in Computer Science (M.Sc. CS)",
    year: "Class of 2021",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-8 text-primary">What Our Students Say</h3>
        
        <div className="relative max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg transition-transform transform">
          <div key={currentIndex} className="text-center">
            <p className="text-gray-700 italic">"{testimonials[currentIndex].feedback}"</p>
            <h4 className="text-primary mt-4 font-semibold">{testimonials[currentIndex].name}</h4>
            <p className="text-sm text-gray-600">{testimonials[currentIndex].program}</p>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].year}</p>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
