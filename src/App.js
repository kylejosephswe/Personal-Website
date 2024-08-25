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
import Description from "./components/Description";

//Local Images.
import oldComputer1Gif from "./images/oldComputer1Gif.gif";
import oldComputer2Gif from "./images/oldComputer2Gif.gif";
import oldComputer3Gif from "./images/oldComputer3Gif.gif";
import oldComputer4Gif from "./images/oldComputer4Gif.gif";
import oldComputer5Gif from "./images/oldComputer5Gif.gif";
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
            path="/experience"
            element={
              <div>
                <Navbar />
                {/*<Intro />*/}
                <h1 className="projects-header">Experience</h1>
                <Work
                  image={cdPlayerGif}
                  altImage="gif of the cd player"
                  jobTitle="Software Build Engineer"
                  companyName="Siemens EDA"
                  companyDate="August 2024 to Present"
                  workDesc="Builds Team"
                  skills="TBD"
                  redirect="https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/"
                />
                <Work
                  image={oldComputer4Gif}
                  altImage="gif of old computer 4"
                  jobTitle="Software Engineer Intern"
                  companyName="Siemens"
                  companyDate="May 2024 to August 2024"
                  workDesc="Power Grid Software Team"
                  skills="Python, PHP, Html, Linux, REST API, Jira"
                  redirect="https://www.siemens.com/global/en/products/energy/grid-software.html#"
                />
                <Work
                  image={oldComputer2Gif}
                  altImage="gif of the second old computer"
                  jobTitle="Software Engineer Intern"
                  companyName="Siemens EDA"
                  companyDate="Apr 2023 to Sep 2023"
                  workDesc="Siemens Calibre R&D Team"
                  skills="Python, Bash, C++, Linux, Git, Jira, Agile, MS Office"
                  redirect="https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/"
                />
                <Work
                  image={oldComputer5Gif}
                  altImage="gif of the fifth old computer"
                  jobTitle="Freelance Web Developer"
                  companyName="Trini Cravings"
                  companyDate="July 2023 to Present"
                  /*workDesc=""*/
                  skills="JavaScript, React, CSS, Firebase, Git"
                  /*redirect=""*/
                />
                <Work
                  image={oldComputer1Gif}
                  altImage="gif of the first old computer"
                  jobTitle="Frontend Engineer"
                  companyName="SunnySide"
                  companyDate="Jan 2023 to Jul 2023"
                  workDesc="App Development Team"
                  skills="JavaScript, TypeScript, React, React Native, CSS, Git, Android Studio"
                  redirect="https://www.sunnyside.care/"
                />
                <Work
                  image={oldComputer3Gif}
                  altImage="gif of the third old computer"
                  jobTitle="IT Consultant"
                  companyName="PSU Office of Academic Innovation"
                  companyDate="Oct 2021 to Jan 2023"
                  workDesc="Canvas Migration Team"
                  skills="Salesforce, Notion, Html, CSS"
                  redirect="https://www.pdx.edu/academic-innovation/"
                />
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
                <Navbar />
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
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Intro />
                {/*<Description />*/}
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
                <Suspense
                  fallback={<h1 className="fallback-text">Loading...</h1>}
                >
                  <Footer />
                </Suspense>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
