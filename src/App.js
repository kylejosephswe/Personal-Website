//Library Imports.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Local Component Imports.
import "./App.css";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

//Local Page Imports.
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route exact path="/experience" element={<Experience />}>
            {" "}
          </Route>
          <Route path="/projects" element={<Projects />}>
            {" "}
          </Route>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
