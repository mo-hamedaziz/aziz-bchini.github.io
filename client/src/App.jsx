import React from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Certificates from "./components/Certifs";
import Experience from "./components/Exp";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  const handleDownloadResume = () => {
    // Implement your logic to download the resume PDF
    alert("Download functionality is not implemented yet.");
  };
  return (
    <div className="app">
      <div className="header">
        <h2>Mohamed Aziz Bchini</h2>
        <img src="/assets/your-profile-photo.jpg" alt="Your Name" />
        <SocialLinks />
        <button onClick={handleDownloadResume}>Download Resume PDF</button>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <ContactMe />
    </div>
  );
};

export default App;
