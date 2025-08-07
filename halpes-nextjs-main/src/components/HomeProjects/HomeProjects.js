import homeProjectsData from "@/data/homeProjectsData";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeProjectsItem from "./HomeProjectsItem";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  navPosition: "bottom",
  gutter: 0,
  responsive: {
    768: {
      items: 2,
      gutter: 20,
    },
    992: {
      items: 3,
      gutter: 30,
    },
  },
};

const HomeProjects = () => {
  return (
    <section className="causes-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline" style={{ display: "none" }}>Projets</span>
          <h2 className="section-title__title">
            Nos Projets
          </h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="causes-one__carousel">
              <TinySlider settings={settings}>
                {homeProjectsData.map((project) => (
                  <HomeProjectsItem project={project} key={project.id} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeProjects; 