// src/components/Gallery.js
import React, { useState } from "react";
import lab1 from "../../assets/images/lab1.jpg";
import lab2 from "../../assets/images/lab2.jpg";
import students from "../../assets/images/students.jpg";
import classroom from "../../assets/images/classroom.jpg";

const images = [lab1, lab2, students, classroom];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-8 text-primary">
          Campus Gallery
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Campus ${i + 1}`}
              onClick={() => setSelectedImage(img)}
              className="rounded-lg shadow hover:scale-105 transition-transform cursor-pointer"
            />
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 transition"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
