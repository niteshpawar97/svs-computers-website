// src/components/Home/FacultyTeam.jsx
import React from "react";
import dummy from "../../assets/images/dummy.webp"; // Ensure Tailwind CSS is imported
import dummy2 from "../../assets/images/dummy2.jpg"; // Ensure Tailwind CSS is imported

const faculty = [
  {
    name: "Mr. Sunil Sahu",
    subject: "Advanced Excel & Tally",
    image: dummy, // Replace with actual image path
  },
  {
    name: "Ms. Pooja Verma",
    subject: "PGDCA & DCA",
    image: dummy2, // Replace with actual image path
  },
  {
    name: "Mr. Rakesh Jain",
    subject: "Programming & Networking",
    image: dummy, // Replace with actual image path
  },
];

function FacultyTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-primary mb-10">Our Faculty</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border-4 border-accent"
              />
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-gray-600">{member.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacultyTeam;
