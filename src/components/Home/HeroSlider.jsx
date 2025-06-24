// src/components/Home/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import slide1 from "../../assets/images/lab1.jpg"; //Modern Classroom :  👉 Content: Students working on computers or a faculty teaching.
import slide2 from "../../assets/images/hero-bg1.jpg"; //Campus Exterior / Branding :  👉 Content: Outside view of SVS Computers building or branding poster.
import slide3 from "../../assets/images/lab2.jpg"; //Students in Practical Lab :  👉 Content: Students with teacher inside lab or smart classroom.

const slides = [
  {
    image: slide1,
    heading: "Empowering Students Since 2008",
    subheading: "Join the Future of IT Education at SVS Computers",
  },
  {
    image: slide2,
    heading: "Certified & Job-Oriented Programs",
    subheading: "BCA, DCA, PGDCA, Tally, CPCT & More",
  },
  {
    image: slide3,
    heading: "State-of-the-Art Facilities",
    subheading: "Modern Labs, Expert Faculty, Real-World Training",
  },
];

function HeroSlider() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 3000 }}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url(${slide.image})`,
              }}
            >
              <div className="flex items-center justify-center h-full text-center text-white px-4">
                <motion.div
                  className="z-10 max-w-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                    {slide.heading}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {slide.subheading}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-accent text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-accent/90"
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
