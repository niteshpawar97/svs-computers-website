// src/components/WhyChooseUs.js
import React, { useState, useEffect } from "react";

function WhyChooseUs() {
  const items = [
    {
      title: "Certified Programs",
      description:
        "Our courses are ISO 9001:2008 certified, ensuring a high standard of education that aligns with industry requirements. These certifications are recognized by employers worldwide, giving our students a competitive edge in the job market.",
      details: [
        "Internationally recognized certification",
        "Industry-relevant curriculum updates",
        "Enhances employability and career prospects",
      ],
    },
    {
      title: "Experienced Faculty",
      description:
        "Our faculty members are not only seasoned educators but also industry experts with hands-on experience in their fields. They bring real-world knowledge to the classroom, ensuring students gain practical insights along with theoretical understanding.",
      details: [
        "Years of industry and teaching experience",
        "Personalized mentorship and guidance",
        "Focus on real-world applications and examples",
      ],
    },
    {
      title: "State-of-the-Art Labs",
      description:
        "Our labs are equipped with modern, high-performance computers and up-to-date software, creating an environment conducive to learning. Students have access to a range of tools that prepare them for actual work environments.",
      details: [
        "Latest hardware and software technologies",
        "Hands-on practice with industry-standard tools",
        "24/7 lab access for flexible learning",
      ],
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum covers both foundational and advanced topics in IT, ensuring students are well-prepared for the industry. Courses are regularly updated to reflect the latest developments in technology.",
      details: [
        "Covers a wide range of subjects and skills",
        "Prepares students for various IT roles",
        "Emphasis on both theoretical and practical knowledge",
      ],
    },
    {
      title: "Placement Assistance",
      description:
        "We offer dedicated placement assistance to help students secure internships and full-time roles after graduation. Our strong network with local and national companies provides valuable employment opportunities for our graduates.",
      details: [
        "Collaboration with leading companies",
        "Interview preparation and resume building",
        "Internship opportunities with top firms",
      ],
    },
    {
      title: "Flexible Learning Options",
      description:
        "We provide flexible class schedules, including evening and weekend batches, to accommodate working professionals and students with varied commitments. Our online resources support independent learning at each student’s pace.",
      details: [
        "Evening and weekend batches available",
        "Online resources and support",
        "Customized learning paths for students",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section id="why-choose-us" className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-6 text-primary">Why Choose Us?</h3>
        <div className="relative max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform">
          <div key={currentIndex} className="text-center">
            <h4 className="text-xl font-semibold mb-2 text-primary">{items[currentIndex].title}</h4>
            <p className="text-gray-700 mb-4">{items[currentIndex].description}</p>
            <ul className="list-disc list-inside text-left text-gray-600">
              {items[currentIndex].details.map((detail, idx) => (
                <li key={idx} className="mb-1">{detail}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, idx) => (
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

export default WhyChooseUs;
