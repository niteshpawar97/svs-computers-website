// src/components/Courses.js
import React from "react";

const courses = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    description:
      "An undergraduate program focusing on computer science fundamentals and applications.",
  },
  {
    title: "Master of Science in Computer Science (M.Sc. CS)",
    duration: "2 Years",
    description:
      "A postgraduate course delving deeper into advanced computer science topics.",
  },
  {
    title: "Post Graduate Diploma in Computer Applications (PGDCA)",
    duration: "1 Year",
    description:
      "A program aimed at providing comprehensive knowledge in computer applications.",
  },
  {
    title: "Diploma in Computer Applications (DCA)",
    duration: "1 Year",
    description:
      "An introductory course covering the basics of computer applications.",
  },
  {
    title: "Tally Prime Basic Course",
    duration: "2 Months",
    description:
      "A certification program covering fundamental accounting software skills.",
  },
  {
    title: "Tally Prime Advanced Course",
    duration: "3 Months",
    description: "An in-depth training program in Tally Prime.",
  },
  {
    title: "Computer Proficiency Certification Test (CPCT)",
    duration: "3 Months",
    description: "A preparatory course for the CPCT exam.",
  },
  {
    title: "Advanced Excel",
    duration: "2 Months",
    description:
      "A program focusing on advanced functionalities of Microsoft Excel.",
  },
];

function Courses() {
  return (
    <section id="courses" className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8 text-blue-700">
          Our{" "}
          <span class="bg-highlightBg px-highlightPaddingX py-highlightPaddingY rounded-highlight">
            Courses
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white border border-gray-200"
            >
              <h4 className="text-xl font-bold text-blue-700 mb-2">
                {course.title}
              </h4>
              <p className="text-sm text-gray-600 font-semibold mb-2">
                Duration: {course.duration}
              </p>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition-colors"
                onClick={() => alert(`Applying for ${course.title}`)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
