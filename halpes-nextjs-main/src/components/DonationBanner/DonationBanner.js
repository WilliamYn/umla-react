import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DonationBanner = () => {
  return (
    <section className="donation-banner">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="donation-banner__content">
              <div className="donation-banner__text">
                <h2 className="donation-banner__title">
                  Aidez-nous à financer la construction d&apos;un forage à Karang au Sénégal!
                </h2>
                <p className="donation-banner__subtitle">
                  Un forage = Une communauté sauvée. Offrez de l&apos;eau potable! Contribuez dès maintenant.
                </p>
              </div>
              <div className="donation-banner__action">
                <a 
                  href="https://www.zeffy.com/fr-CA/donation-form/projet-al-muslihoun-reformer-les-coeurs-changer-des-vies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-banner__btn thm-btn"
                >
                  <i className="fas fa-tint"></i>
                  Faire un don
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationBanner; 