import React from "react";
import { motion } from "framer-motion";

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
  }
];

function Courses() {
  return (
    <section id="courses" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-10 text-primary">
          Our <span className="bg-yellow-100 px-2 py-1 rounded">Courses</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                {course.title}
              </h4>
              <p className="text-sm text-gray-600 font-medium mb-2">
                Duration: {course.duration}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                {course.description}
              </p>
              <button
                className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors text-sm"
                // onClick={() => alert(`Applying for ${course.title}`)}
                 onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
