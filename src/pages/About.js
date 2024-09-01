//Library Imports.
import React, { Suspense } from "react";

//Local File Imports.
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Contact from "../components/Contact";

//Local Image Imports.
import objectSpinningGif from "../images/objectSpinningGif.gif";

function About() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Work
        image={objectSpinningGif}
        altImage="Gif of object spinning"
        jobTitle="Computer Science Major"
        companyName="Portland State University"
        companyDate="Sep 2019 - Aug 2024"
        skills="Web Development, Operating Systems, Systems Programming, Data Structures & Algorithms, Software Engineering"
        redirect="https://www.pdx.edu/"
      />
      <Contact />
      <Suspense fallback={<h1 className="fallback-text">Loading...</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default About;
