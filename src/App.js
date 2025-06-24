// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Router>
        <ScrollToTop />  {/* 👈 Add this line here */}
      <div className="App bg-background text-secondary">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </div>
    </Router>
  );
}

export default App;
