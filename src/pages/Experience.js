//Import React Libraries.
import React, { lazy, Suspense } from "react";

//Import Local Components.
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Footer from "../components/Footer";

//Import Local Images.
import oldComputer1Gif from "../images/oldComputer1Gif.gif";
import oldComputer2Gif from "../images/oldComputer2Gif.gif";
import oldComputer3Gif from "../images/oldComputer3Gif.gif";
import oldComputer4Gif from "../images/oldComputer4Gif.gif";
import oldComputer5Gif from "../images/oldComputer5Gif.gif";
import cdPlayerGif from "../images/cdPlayerGif.gif";

function Experience() {
  return (
    <div>
      <Navbar />
      <h1 className="projects-header">Experience</h1>
      <Work
        image={cdPlayerGif}
        altImage="gif of the cd player"
        jobTitle="Software Build Engineer"
        companyName="Siemens EDA"
        companyDate="August 2024 to Present"
        workDesc="Infrastructure Team"
        skills="Python, C++, Bash, Linux, QT, Git, GitLab, CI/CD, REST API, Jira "
        redirect="https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/"
      />
      <Work
        image={oldComputer1Gif}
        altImage="gif of the fifth old computer"
        jobTitle="Freelance Software Engineer"
        companyName="Trini Cravings"
        companyDate="July 2023 to July 2024"
        workDesc="Lead Developer"
        skills="JavaScript, React, CSS, Firebase, Git"
        /*redirect=""*/
      />
      <Work
        image={oldComputer3Gif}
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
        workDesc="R&D Team"
        skills="Python, Bash, C++, Linux, Git, Jira, Agile, MS Office"
        redirect="https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/"
      />
      <Work
        image={oldComputer5Gif}
        altImage="gif of the first old computer"
        jobTitle="Frontend Engineer"
        companyName="SunnySide"
        companyDate="Jan 2023 to Jul 2023"
        workDesc="App Development Team"
        skills="JavaScript, TypeScript, React, React Native, CSS, Git, Android Studio"
        redirect="https://www.sunnyside.care/"
      />
      <Suspense fallback={<h1 className="fallback-text">Loading...</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Experience;
