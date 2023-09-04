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
import boomer from "./images/Boomer.gif";
import boomer2 from "./images/Boomer2.gif";
import boomer3 from "./images/Boomer3.gif";
import boomer4 from "./images/Boomer4.gif";

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
                  image={boomer2}
                  altImage="oldComputer2"
                  jobTitle="Software Engineer Intern"
                  companyName="Siemens EDA"
                  companyDate="Apr 2023 to Sep 2023"
                  workDesc="I worked on the Parasitic Extraction (PEX) Team as a Software Engineer Intern to make a major accuracy analyzer project for xACT 3D over the span of 6 months"
                  skills="Python, Bash, C++, Linux, Git, Jira"
                  redirect="https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/"
                />
                <Work
                  image={boomer}
                  altImage="oldComputer1"
                  jobTitle="Frontend Engineer"
                  companyName="SunnySide"
                  companyDate="Jan 2023 to Apr 2023"
                  workDesc="Contributed to the SunnySide app in preparation for the official launch by implementing in-app screens, and features needed for a seamless user experience"
                  skills="JavaScript, TypeScript, React, React Native, CSS, Git"
                  redirect="https://www.sunnyside.care/"
                />
                <Work
                  image={boomer3}
                  altImage="Old computer"
                  jobTitle="IT Consultant"
                  companyName="PSU Office of Academic Innovation"
                  companyDate="Oct 2021 to Jan 2023"
                  workDesc="Primarily worked on migrating course content from the D2L learning space to Canvas and working on audits"
                  skills="Salesforce, Notion, Html, CSS"
                  redirect="https://www.pdx.edu/academic-innovation/"
                />
                <Work
                  image={boomer4}
                  altImage="Object Spinning"
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
