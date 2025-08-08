import becomeVolunteerList from "@/data/becomeVolunteerList";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import becomeVolunteer from "@/data/becomeVolunteer.json";

const BecomeVolunteerPage = () => {
  const { page } = becomeVolunteer;
  return (
    <section className="become-volunteer-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{page.tagline}</span>
          <h2 className="section-title__title">
            {page.title}
          </h2>
        </div>
        <Row>
          <Col xl={12} lg={12}>
            <div className="become-volunteer-page__left">
              <div className="become-volunteer-page__img">
                <Image src={page.image} alt="" />
              </div>
              <h3 className="become-volunteer-page__title">{page.whyTitle}</h3>
              <p className="become-volunteer-page__text">
                {page.paragraphs[0]}
              </p>
              <br />
              <p className="become-volunteer-page__text">
                {page.paragraphs[1]}
              </p>
              <ul className="become-volunteer-page__list list-unstyled hide">
                {becomeVolunteerList.map((item, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    <div className="text">
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={page.formUrl} className="thm-btn" rel="noreferrer" target="_blank">
                <i className="fas fa-arrow-circle-right"></i>{page.buttonLabel}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeVolunteerPage;
