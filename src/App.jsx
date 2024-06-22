import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ParticleEffect from "./pages/ParticleEffect"; // Import the ParticleEffect component
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Navbar />
        <ScrollToTop />
        <ParticleEffect />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;