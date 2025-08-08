import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import becomeVolunteer from "@/data/becomeVolunteer.json";

const BecomeVolunteer = () => {
  const { cta } = becomeVolunteer;
  return (
    <section className="become-volunteer">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="become-volunteer__inner">
              <div className="become-volunteer__left">
                <h2>
                  {cta.headline}
                </h2>
                <div className="become-volunteer__big-text">
                  <h2>{cta.bigText}</h2>
                </div>
              </div>
              <div className="become-volunteer__btn-box">
                <Link href={cta.formUrl}>
                  <a className="become-volunteer__btn thm-btn" rel="noreferrer" target="_blank">
                    {cta.buttonLabel}
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
