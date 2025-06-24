import React from "react";
// import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Courses from "../components/Home/Courses";
import Facilities from "../components/Home/Facilities";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Stats from "../components/Home/Stats";
import CTABanner from "../components/Home/CTABanner";
import Gallery from "../components/Home/Gallery";
import HeroSlider from "../components/Home/HeroSlider"; // Replace Hero
import PrincipalMessage from "../components/Home/PrincipalMessage";
import FacultyTeam from "../components/Home/FacultyTeam";

function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSlider />
      <About />
      <Stats />
      <WhyChooseUs />
      <PrincipalMessage />
      <Courses />
      <Gallery />
      <FacultyTeam />
      <Facilities />
      <Testimonials />
      <CTABanner />
      <ContactForm />
    </>
  );
}

export default Home;
