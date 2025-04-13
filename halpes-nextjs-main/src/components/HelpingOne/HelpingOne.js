import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HelpingOne = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Plus d&apos;informations</span>
          <h2 className="section-title__title">
            Nous aidons aujourd&apos;hui <br />
            et nous aidons demain
          </h2>
        </div>
        <Row>
          <Col xl={12} lg={12}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                Faisons une différence
              </h3>
              <p className="helping-one__text">
                Nous aidons aujourd&apos;hui et nous aidons demain. Les communautés
                locales sont essentielles pour le succès de nos programmes. Notre histoire est une histoire de collaboration et de partage.
                Nous croyons fermement que chaque individu peut faire une différence. 
              </p>
              <ul className="helping-one__left-list list-unstyled">
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Faire une différence</p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Aider les plus vulnérables</p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Donner de l&apos;espoir</p>
                  </div>
                </li>
              </ul>
              <div className="helping-one__left-img">
                <Image src="/images/resources/umla-food-1.jpg" alt="" />
                <div className="helping-one__left-icon-box">
                  <span className="icon-heart"></span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} style={{ display: "none" }}>
            <div className="helping-one__right">
              <form action="" className="helping-one__right-form">
                <Row>
                  <Col lg={12}>
                    <div className="helping-one__right-input-box">
                      <input
                        type="text"
                        name="amount"
                        placeholder="Enter Donation Amount"
                      />
                      <div className="helping-one__right-dolar-icon">
                        <span>$</span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <input type="text" name="name" placeholder="Your Name" />
                  </Col>
                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col lg={12}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </Col>
                  <Col lg={12}>
                    <textarea
                      name="message"
                      placeholder="Write Message"
                    ></textarea>
                  </Col>
                  <Col lg={12}>
                    <button
                      type="submit"
                      className="thm-btn helping-one__right-btn"
                    >
                      <i className="fas fa-arrow-circle-right"></i>Continue Now
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpingOne;
