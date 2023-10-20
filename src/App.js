//Library Imports.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

//Local code imports.
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";

//Local Images.
import oldComputer1Gif from "./images/oldComputer1Gif.gif";
import oldComputer2Gif from "./images/oldComputer2Gif.gif";
import oldComputer3Gif from "./images/oldComputer3Gif.gif";
import objectSpinningGif from "./images/objectSpinningGif.gif";
import cdPlayerGif from "./images/cdPlayerGif.gif";

//I use lazy loading the Footer instead of importing it regularly to improve performance.
//import Footer from './Footer'
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Navbar />
                <Intro />
                <Work
                  image={cdPlayerGif}
                  altImage="Gif of a CD player"
                  jobTitle="Founder & Lead Software Engineer"
                  companyName="Meloverna"
                  companyDate="Oct 2023 to Present"
                  workDesc="Pioneered the concept of Meloverna and built it from the ground up as the lead software engineer"
                  skills="SQL, Kotlin, Python, Flask, JavaScript, React.js, Jest, JUnit, CSS, Git"
                  redirect=""
                />
                <Work
                  image={oldComputer2Gif}
                  altImage="gif of the second old computer"
                  jobTitle="Software Engineer Intern"
                  companyName="Siemens EDA"
                  companyDate="Apr 2023 to Sep 2023"
                  workDesc="I worked on the Parasitic Extraction (PEX) Team as a Software Engineer Intern to make a major accuracy analyzer project for xACT 3D over the span of 6 months"
                  skills="Python, Bash, C++, Linux, Git, Jira, Agile, MS Office"
                  redirect="https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/"
                />
                <Work
                  image={oldComputer1Gif}
                  altImage="gif of the first old computer"
                  jobTitle="Frontend Engineer"
                  companyName="SunnySide"
                  companyDate="Jan 2023 to Jul 2023"
                  workDesc="Contributed to the SunnySide app in preparation for the official launch by implementing in-app screens, and features needed for a seamless user experience"
                  skills="JavaScript, TypeScript, React, React Native, CSS, Git, Android Studio"
                  redirect="https://www.sunnyside.care/"
                />
                <Work
                  image={oldComputer3Gif}
                  altImage="gif of the third old computer"
                  jobTitle="IT Consultant"
                  companyName="PSU Office of Academic Innovation"
                  companyDate="Oct 2021 to Jan 2023"
                  workDesc="Primarily worked on migrating course content from the D2L learning space to Canvas and working on audits"
                  skills="Salesforce, Notion, Html, CSS"
                  redirect="https://www.pdx.edu/academic-innovation/"
                />
                <Work
                  image={objectSpinningGif}
                  altImage="Gif of object spinning"
                  jobTitle="Computer Science Major"
                  companyName="Portland State University"
                  companyDate="Sep 2019 to Dec 2024"
                  workDesc="Concentration in Software Engineering"
                  skills="Web Development, Operating Systems, Systems Programming, Data Structures & Algorithms, Software Engineering"
                  redirect="https://www.pdx.edu/"
                />
                <Contact />
                <Suspense
                  fallback={<h1 className="fallback-text">Loading...</h1>}
                >
                  <Footer />
                </Suspense>
              </div>
            }
          >
            {" "}
          </Route>
          <Route
            path="/projects"
            element={
              <div>
                <Projects />
                <Suspense
                  fallback={<h1 className="fallback-text">Loading...</h1>}
                >
                  <Footer />
                </Suspense>
              </div>
            }
          >
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
