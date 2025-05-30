import React from "react";
import { Container, Row } from "react-bootstrap";
import CharityContent from "./CharityContent";
import CharityImage from "./CharityImage";

const Charity = () => {
  return (
    <section className="welcome-one">
      <Container>
        <Row>
          <CharityContent />
          <CharityImage />

        </Row>
      </Container>
    </section>
  );
};

export default Charity;
