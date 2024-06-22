import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";

const Intro = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Mohamed Aziz Bchini, a passionate Computer
              Networks and Telecommunications Engineering student at INSAT,
              fueled by an insatiable curiosity for all things tech. As a
              Cybersecurity and Cloud Computing enthusiast, I thrive on
              exploring the intricate layers of digital security and the
              boundless possibilities of cloud-based solutions. You can often
              find me immersed in CTF competitions under the alias "m4dz", where
              I hone my problem-solving skills and push the boundaries of my
              knowledge. With a relentless drive for innovation and a knack for
              tackling complex challenges, I am dedicated to forging a dynamic
              career at the intersection of technology and cybersecurity.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mo-hamedaziz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:your-email@example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />{" "}
                  {/* This icon represents an email. Replace with an appropriate icon if necessary. */}
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohamed-aziz-bchini/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@mohamedaziz0801"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Intro;
