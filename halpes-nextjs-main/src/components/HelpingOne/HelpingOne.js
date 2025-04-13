import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HelpingOne = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Plus d&apos;informations</span>
          <h2 className="section-title__title">
            Histoire de UMLA <br />
            depuis 2021
          </h2>
        </div>
        <Row>
          <Col xl={12} lg={12}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                Nos débuts
              </h3>
              <p className="helping-one__text">
                Nous avons commencé à aider les plus vulnérables en 2021.
                Notre organisation a été créée pour répondre aux besoins des personnes les plus fragiles de notre communauté.
                Nous avons vu la nécessité de mettre en place un système de distribution de repas et de soins aux personnes les plus vulnérables.
              </p>
              <h3 className="helping-one__title">
                Notre première maraude
              </h3>
              <p className="helping-one__text">
                Nous avons organisé notre première maraude en 2022. 
                Nous avons distribué 100 repas à des personnes les plus vulnérables de notre communauté.
                Nous avons été très heureux de pouvoir aider ces personnes et de pouvoir faire une différence dans leur vie.
              </p>
              <h3 className="helping-one__title">
                Notre premier souper
              </h3>
              <p className="helping-one__text">
                Nous avons organisé un souper pour la Palestine. 
                Nous avons servi 100 repas à des personnes les plus vulnérables de notre communauté.
                Nous avons été très heureux de pouvoir aider ces personnes et de pouvoir faire une différence dans leur vie.
              </p>
              <h3 className="helping-one__title">
                Aujourd&apos;hui
              </h3>
              <p className="helping-one__text">
                Nous sommes à la recherche de nouvelles façons de faire une différence dans notre communauté.
                Nous avons plein de projets en cours et nous avons hâte de vous les présenter.
              </p>
              <ul className="helping-one__left-list list-unstyled" style={{ display: "none" }}>
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
              <div className="helping-one__left-img" style={{ display: "none" }}>
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
