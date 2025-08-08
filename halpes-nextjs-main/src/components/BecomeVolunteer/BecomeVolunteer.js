import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BecomeVolunteer = () => {
  return (
    <section className="become-volunteer">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="become-volunteer__inner">
              <div className="become-volunteer__left">
                <h2>
                  Rejoignez votre main avec nous pour <br /> une meilleure vie et un avenir meilleur
                </h2>
                <div className="become-volunteer__big-text">
                  <h2>Aidez-nous</h2>
                </div>
              </div>
              <div className="become-volunteer__btn-box">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSegLGAZV4gBZ0O0ehf9K8cFANkGiZQ_NmmjmE7jl0PIWlwJCg/viewform">
                  <a className="become-volunteer__btn thm-btn" rel="noreferrer" target="_blank">
                    Devenir bénévole
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeVolunteer;
