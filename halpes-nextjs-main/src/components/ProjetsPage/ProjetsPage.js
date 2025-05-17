import projetsPageData from "@/data/projetsPageData";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjetsSingle from "../ProjetsOne/ProjetsSingle";

const ProjetsPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
          {projetsPageData.map((projet) => (
            <Col xl={4} lg={6} md={6} key={projet.id}>
              <ProjetsSingle causePage cause={projet} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjetsPage;
