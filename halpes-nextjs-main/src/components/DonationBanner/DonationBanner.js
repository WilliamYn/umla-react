import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import donationBanner from "@/data/donationBanner.json";

const DonationBanner = () => {
  return (
    <section className="donation-banner">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="donation-banner__content">
              <div className="donation-banner__text">
                <h2 className="donation-banner__title">
                  {donationBanner.title}
                </h2>
                <p className="donation-banner__subtitle">
                  {donationBanner.subtitle}
                </p>
              </div>
              <div className="donation-banner__action">
                <a 
                  href={donationBanner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-banner__btn thm-btn"
                >
                  <i className="fas fa-tint"></i>
                  {donationBanner.buttonLabel}
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