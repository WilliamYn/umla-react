import becomeVolunteerList from "@/data/becomeVolunteerList";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VolunteerForm from "./VolunteerForm";

const BecomeVolunteerPage = () => {
  return (
    <section className="become-volunteer-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Aidez-nous dès maintenant</span>
          <h2 className="section-title__title">
            Rejoignez notre communauté pour <br /> devenir bénévole
          </h2>
        </div>
        <Row>
          <Col xl={12} lg={12}>
            <div className="become-volunteer-page__left">
              <div className="become-volunteer-page__img">
                <Image src="/images/benevolat-page/benevolat-1.jpg" alt="" />
              </div>
              <h3 className="become-volunteer-page__title">Pourquoi devenir bénévole?</h3>
              <p className="become-volunteer-page__text">
                Nous sommes une association qui a pour but de venir en aide aux personnes les plus vulnérables de notre société.
                Nous organisons des maraudes chaque mois, hiver comme été, pour distribuer des repas et des vêtements aux personnes les plus vulnérables.
                Nous avons besoin de bénévoles pour venir en aide à nos maraudes.
                Nous avons besoin d&apos;aide pour la préparation des repas, la distribution des vêtements et des chaussures.
              </p>
              <ul className="become-volunteer-page__list list-unstyled">
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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSegLGAZV4gBZ0O0ehf9K8cFANkGiZQ_NmmjmE7jl0PIWlwJCg/viewform" className="thm-btn" rel="noreferrer" target="_blank">
                <i className="fas fa-arrow-circle-right"></i>Devenir bénévole
              </a>
            </div>
          </Col>
          <Col xl={6} lg={6} style={{ display: "none" }}>
            <div className="become-volunteer-page__right">
              <VolunteerForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeVolunteerPage;
