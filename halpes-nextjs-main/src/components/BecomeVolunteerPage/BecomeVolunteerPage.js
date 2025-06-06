import becomeVolunteerList from "@/data/becomeVolunteerList";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VolunteerForm from "./VolunteerForm";

const BecomeVolunteerPage = () => {
  return (
    <section className="become-volunteer-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Agissez aujourd&apos;hui</span>
          <h2 className="section-title__title">
          Devenez bénévole, changez des vies
          </h2>
        </div>
        <Row>
          <Col xl={12} lg={12}>
            <div className="become-volunteer-page__left">
              <div className="become-volunteer-page__img">
                <Image src="/images/benevolat-page/benevolat-1.jpg" alt="" />
              </div>
                          <h3 className="become-volunteer-page__title">Pourquoi devenir bénévole ?</h3>
              <p className="become-volunteer-page__text">
                              Chez Une Main Lave l’Autre (UMLA), chaque geste compte. Devenir bénévole, c’est bien plus que distribuer des repas : c’est tendre la main, créer du lien, et redonner de la dignité à celles et ceux qu’on oublie trop souvent.
                              Nos actions sont multiples : soutien aux personnes en situation d’itinérance, aide aux familles réfugiées, accompagnement de communautés marginalisées, sensibilisation humanitaire auprès des jeunes, et plus encore.

              </p>
              <br />
              <p className="become-volunteer-page__text">
                              Chaque mission repose sur des bénévoles engagés, prêts à offrir leur temps, leurs idées ou leur énergie.
                              Rejoignez-nous, que ce soit pour cuisiner, distribuer, organiser, sensibiliser ou simplement écouter.
                              Ensemble, faisons de la solidarité une force vivante.

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
