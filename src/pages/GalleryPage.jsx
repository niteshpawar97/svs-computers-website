// src/pages/GalleryPage.jsx
import React from "react";
import Gallery from "../components/Home/Gallery";

function GalleryPage() {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Gallery />
      </div>
    </section>
  );
}

export default GalleryPage;
