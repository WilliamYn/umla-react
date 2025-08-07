import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MissionContent from "./MissionContent";

const MissionComponent = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <MissionContent />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionComponent; 