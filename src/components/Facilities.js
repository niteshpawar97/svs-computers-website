// src/components/Facilities.js
import React from "react";

function Facilities() {
  const facilities = [
    {
      title: "Modern Computer Labs",
      description:
        "Our computer labs are equipped with the latest high-performance systems, offering students a hands-on experience with current software and tools used in the industry. Each lab is designed to create an immersive learning environment, allowing students to work on complex projects and assignments.",
    },
    {
      title: "Well-Stocked Library",
      description:
        "Our library boasts a comprehensive collection of textbooks, reference materials, research papers, and digital resources covering various domains in IT and computer science. Students have access to quiet study areas and can explore a wealth of knowledge for academic and personal growth.",
    },
    {
      title: "Experienced Faculty",
      description:
        "Our faculty consists of highly qualified and experienced professionals who bring years of industry and academic expertise to the classroom. They are dedicated to guiding students through challenging concepts, fostering a deep understanding of each subject, and offering personalized support.",
    },
    {
      title: "Hands-on Practice",
      description:
        "We believe in the importance of practical knowledge. Our programs are structured to include extensive hands-on practice, allowing students to apply theoretical knowledge in real-world scenarios. Students work on live projects, case studies, and collaborative assignments to reinforce their skills.",
    },
  ];

  return (
    <section id="facilities" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-8 text-primary">Our Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-3">{facility.title}</h4>
              <p className="text-gray-700">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
