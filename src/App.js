// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Facilities from "./components/Facilities";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';

function App() {
  return (
    <div className="App bg-background text-secondary">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Courses />
      <Facilities />
      <Testimonials /> 
      <Downloads />
      <ContactForm />
      <Footer />
      <WhatsAppButton /> {/* Fixed WhatsApp Button */}
      <CallButton /> {/* Fixed Call Button */}
    </div>
  );
}

export default App;
