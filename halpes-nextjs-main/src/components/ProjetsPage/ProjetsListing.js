import projetsPageData from "@/data/projetsPageData.json";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeProjectsItem from "../HomeProjects/HomeProjectsItem";

const ProjetsListing = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
          {projetsPageData.map((project) => (
            <Col xl={4} lg={6} md={6} key={project.id}>
              <HomeProjectsItem project={project} projectPage />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjetsListing; 