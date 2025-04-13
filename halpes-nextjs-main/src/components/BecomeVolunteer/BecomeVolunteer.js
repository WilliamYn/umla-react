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
                <Link href="/become-volunteer">
                  <a className="become-volunteer__btn thm-btn">
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
