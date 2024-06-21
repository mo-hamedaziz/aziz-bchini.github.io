import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import techData from './techData';

const TechCard = (props) => {
  return (
    <div className="tech-card">
      <img
        style={{ backgroundColor: props.bg }} // Changed 'background' to 'backgroundColor'
        src={props.imageUrl}
        alt={props.title}
      />
      <h6 className="mt-2">{props.title}</h6>
    </div>
  );
};

const TechStack = () => {
  return (
    <Container>
      <div className="details">
        <div className="details__techs">
          <h2 className="details__techs__title">
            Tools, Languages & Frameworks/Libraries
          </h2>
          <div className="details__techs__container">
            <Row className="mt-5">
              {techData.map((item, i) => (
                <Col key={i} sm={6} md={4} lg={3}> {/* Added responsive grid sizes */}
                  <TechCard
                    imageUrl={item.imageUrl}
                    title={item.techName}
                    bg={item.bg}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="details__skills mt-5">
          <h2 className="details__skills__title">Skills</h2>
          <div className="details__skills__container">
            <Row>
              <Col sm>
                <h4>Web Development</h4>
              </Col>
              <Col sm>
                <h4>Technical Writing</h4>
              </Col>
            </Row>
          </div>
        </div>
      </div> {/* Added closing div tag for the 'details' div */}
    </Container>
  );
};

export default TechStack;
