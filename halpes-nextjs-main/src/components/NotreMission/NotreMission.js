import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesDetailsLeft from "./CausesDetailsLeft";

const CausesDetailsPage = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <CausesDetailsLeft />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesDetailsPage;
