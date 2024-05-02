import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  return (
    <Container className="hero">
      <Row>
        <Col sm={8} className="text">
          <h2>Hi, I am Aziz Bchini !</h2>
          <h5>
            Cybersecurity Enthusiast | CTF Player | Computer Networks and
            Telecommunications Engineering student - INSAT
          </h5>
        </Col>
        <Col sm={4} className="photo">
          <img src="./src/assets/hero.png" alt="photo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
