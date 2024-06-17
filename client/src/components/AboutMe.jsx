import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="content">
        <h2>About Me</h2>
        <p>
          Hey there! I'm <span className="highlight">Mohamed Aziz Bchini</span>,
          a passionate Computer Networks and Telecommunications Engineering
          student at INSAT, fueled by an insatiable curiosity for all things
          tech. As a{" "}
          <span className="highlight">
            Cybersecurity and Cloud Computing enthusiast
          </span>
          , I thrive on exploring the intricate layers of digital security and
          the boundless possibilities of cloud-based solutions. You can often
          find me immersed in CTF competitions under the alias "
          <span className="highlight">m4dz</span>", where I hone my
          problem-solving skills and push the boundaries of my knowledge. With a
          relentless drive for innovation and a knack for tackling complex
          challenges, I am dedicated to forging a dynamic career at the
          intersection of technology and cybersecurity.
        </p>
        <p className="quote">
          "The only way to do great work is to love what you do." - Steve Jobs
        </p>
        <a href="#" className="cta-button">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
