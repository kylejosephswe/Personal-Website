//Library Imports.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'

//Local code imports.
import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Work from './components/Work'
import Contact from './components/Contact'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'

//Local Images.
import boomer from './images/Boomer.gif'
import boomer2 from './images/Boomer2.gif'

//I use lazy loading the Footer instead of importing it regularly to improve performance.
//import Footer from './Footer' 
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <div>
              <Navbar />
              <Intro />
              <Work image={boomer2} altImage='oldComputer2' jobTitle='R&D Software Engineer Intern' companyName='Siemens EDA' workDesc='I will be working on the Parasytic Extraction Team as a Research and Development Software Engineer Intern' redirect='https://eda.sw.siemens.com/en-US/ic/calibre-design/circuit-verification/xact-3d/' />
              <Work image={boomer} altImage='oldComputer1' jobTitle='Frontend Engineer' companyName='SunnySide' workDesc='Contributed to the SunnySide app in preperation for the official launch by implementing in-app screens, and features needed for a seamless user experience' redirect='https://www.sunnyside.care/' />
              <Contact />
              <Suspense fallback={<h1 className="fallback-text">Loading...</h1>}>
                <Footer />
              </Suspense>
            </div>
          }> </Route>
          <Route path='/projects' element={
            <div>
              <Projects />
              <Suspense fallback={<h1 className="fallback-text">Loading...</h1>}>
                <Footer />
              </Suspense>
            </div>
          }> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
