import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium, FaUpwork } from "react-icons/fa6";
import { HiMail, HiDownload } from "react-icons/hi";
import { SiGitbook, SiTryhackme } from "react-icons/si";

import useTypeWriter from "../hooks/useTypeWriter";

const Hero = () => {
  const handleDownload = () => {
    const filePath = 'resumeCyberSec.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.download = 'aziz_bchini_resume.pdf';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const displayText = useTypeWriter(
    "Cybersecurity Enthusiast | CTF Player | Computer Networks and Telecommunications Engineering student - INSAT",
    10
  );

  return (
    <Container className="hero">
      <Row>
        <Col sm={8} className="text">
          <h2>Hi, I'm Aziz Bchini !</h2>
          <h5>{displayText}</h5>
          <Row>
            <Col className="social-media">
              <a
                href="mailto:mohamedaziz.bchini@insat.ucar.tn"
                target="_blank"
                title="Email"
              >
                <HiMail className="icon" size="3em" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-aziz-bchini/"
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedin className="icon" size="3em" />
              </a>
              <a
                href="https://github.com/mo-hamedaziz"
                target="_blank"
                title="GitHub"
              >
                <FaGithub className="icon" size="3em" />
              </a>
              <a
                href="https://medium.com/@mohamedaziz0801"
                target="_blank"
                title="Medium"
              >
                <FaMedium className="icon" size="3em" />
              </a>
              {/* <a href="#" target="_blank" title="GitBook">
              <SiGitbook className="icon" size="3em" />
            </a> */}
              <a
                href="https://tryhackme.com/p/mohamedaziz"
                target="_blank"
                title="TryHackMe"
              >
                <SiTryhackme className="icon" size="3em" />
              </a>
              {/* <a
              href="#"
              target="_blank"
              title="UpWork"
            >
              <FaUpwork className="icon" size="3em" />
            </a> */}
            </Col>
            <Col className="download-btn">
              <button onClick={handleDownload}>
                Resume <HiDownload size="1em"/>
              </button>
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="photo">
          <img src="hero.png" alt="photo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
