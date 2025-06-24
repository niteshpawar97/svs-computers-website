import React from "react";
import About from "../components/Home/About";
import PrincipalMessage from "../components/Home/PrincipalMessage";
function AboutPage() {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 space-y-16">
        {/* Intro/About Section */}
        <About />

        {/* Welcome Note */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Welcome to SVS Computers</h3>
          <p className="text-gray-700 leading-relaxed">
            SVS Computers, established in 2008, has been a pillar of computer education in Chhindwara. 
            With modern infrastructure and industry-expert faculty, we aim to equip students with 
            cutting-edge skills in the fields of IT, programming, and digital technology.
          </p>
        </div>

        {/* Director Message */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Message from the Director</h3>
          <p className="text-gray-700 leading-relaxed">
            "At SVS Computers, we are committed to shaping the future of IT professionals. 
            We continuously upgrade our curriculum, labs, and teaching methods to meet the growing demands of the industry. 
            Our students' success is our greatest achievement."
            <br /><br />
            — <strong>Mr. Shirish Smarth</strong>, Director
          </p>
        </div>

        {/* Achievements */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Our Achievements</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Over 5000+ students trained since 2008</li>
            <li>100+ students placed in top IT companies</li>
            <li>Recognized as a top AICPE-affiliated center</li>
            <li>Host to multiple government certification programs</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Why Choose SVS Computers?</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Industry-relevant courses & certifications</li>
            <li>Modern lab infrastructure & fast systems</li>
            <li>Experienced and supportive faculty</li>
            <li>Practical training + real-world projects</li>
            <li>Affordable fees and EMI options</li>
          </ul>
        </div>

        {/* Affiliations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Affiliations & Recognition</h3>
          <p className="text-gray-700 leading-relaxed">
            SVS Computers is affiliated with AICPE and registered under ISO 9001:2008 standards. 
            Our courses are recognized by educational and professional bodies, making them valuable for both 
            higher studies and career placements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
