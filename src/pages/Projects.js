//Import React Libraries.
import React, { lazy, Suspense } from "react";

//Import Local Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsComponent from "../components/Projects";

function Projects() {
  return (
    <div>
      <Navbar />
      <ProjectsComponent />
      <Suspense fallback={<h1 className="fallback-text">Loading...</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Projects;
