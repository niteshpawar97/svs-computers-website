import React from "react";
import Courses from "../components/Home/Courses";

function CoursesPage() {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Courses />
      </div>
    </section>
  );
}

export default CoursesPage;
