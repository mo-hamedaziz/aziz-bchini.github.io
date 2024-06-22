import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../assets/hero.png";
import ParticleEffect from "./ParticleEffect";
import Intro from "./Intro";
import TypingEffect from "./TypingEffect";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <ParticleEffect />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohamed Aziz Bchini </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypingEffect />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Hero}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Intro />
    </section>
  );
};

export default Home;
