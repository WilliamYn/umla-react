import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HelpingOne = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Plus d&apos;informations</span>
          <h2 className="section-title__title">
            Notre Histoire
          </h2>
        </div>
        <Row>
          <Col xl={12} lg={12}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                Les débuts : un simple geste, une grande portée
              </h3>
              <p className="helping-one__text">
                              Tout a commencé avec un petit groupe d’amis, unis par une volonté sincère de faire une différence. Ensemble, ils s’étaient engagés dans une initiative caritative existante, participant à des distributions mensuelles de nourriture et de vêtements destinées aux personnes en situation d’itinérance et de précarité.
                          </p>
                          <p className="helping-one__text">
                              C’était au lendemain de la crise de la COVID-19 — une période éprouvante qui a creusé les inégalités sociales et aggravé la réalité de l’itinérance à Montréal. Ce que ces jeunes bénévoles ont vu sur le terrain les a profondément marqués : des visages oubliés, des mains tendues, des regards pleins de détresse… et trop peu de réponses concrètes.
                          </p>
                          <p className="helping-one__text">
                              Très vite, ils ont compris que leur implication devait aller plus loin. Qu’on ne pouvait pas simplement soulager - il fallait aussi comprendre, agir, créer des liens durables et redonner de la dignité à ceux qu’on croise trop souvent sans les voir.
                          </p>
              <h3 className="helping-one__title">
                              Une initiative née du cœur
              </h3>
              <p className="helping-one__text">
                              En mars 2021, conscients de l’urgence croissante sur le terrain, ils ont lancé leur propre initiative : des distributions bimensuelles de nourriture et de vêtements, organisées avec les moyens disponibles, mais portées par une détermination sans faille.
                          </p>
                          <p className="helping-one__text">
                              Au départ, tout reposait sur des contributions bénévoles, souvent modestes, mais toujours sincères. Des repas préparés maison, quelques vêtements d’hiver, du temps donné sans compter. Ces gestes simples ont suffi pour créer un impact réel : soulager des besoins immédiats, recréer du lien humain, et surtout, rappeler à chacun sa valeur.
                          </p>
              <h3 className="helping-one__title">
                              Plus qu’une aide matérielle : un lien humain
              </h3>
              <p className="helping-one__text">
                              Ce n’étaient pas seulement des repas chauds ou des manteaux secs que l’on distribuait. C’étaient aussi des sourires, des échanges sincères, des regards empreints de respect. Des instants de fraternité où l’on prenait conscience que ceux qui donnent et ceux qui reçoivent sont, en réalité, les deux visages d’une même humanité.
                          </p>
                          <p className="helping-one__text">
                              C’est dans cette réciprocité, dans cette chaleur humaine partagée, qu’est née l’identité de notre organisme : Une Main Lave l’Autre. Un nom simple, mais porteur de sens. Il incarne une solidarité active, un soutien mutuel, où chaque main tendue contribue à élever l’autre, dans la dignité et le respect.
                          </p>
              <h3 className="helping-one__title">
                              Une croissance portée par l’altruisme
              </h3>
              <p className="helping-one__text">
                              Peu à peu, l’initiative a pris de l’ampleur. De nouvelles personnes animées par la même volonté d’agir ont rejoint le mouvement. Les actions se sont diversifiées : en plus des distributions de rue, UMLA a élargi son engagement auprès des personnes réfugiées ainsi qu’auprès de communautés touchées par des catastrophes naturelles ou des conflits.
                          </p>
                          <p className="helping-one__text">
                              Pour accompagner cette croissance, une structure organisationnelle s’est mise en place. Une équipe dédiée a été formée, des rôles ont été clarifiés et des objectifs concrets ont été établis pour guider l’action. Le 10 avril 2024, UMLA a été officiellement enregistrée comme organisme à but non lucratif (OBNL) auprès du Registraire des entreprises du Québec, marquant une nouvelle étape dans son développement.
                          </p>
                          <h3 className="helping-one__title">
                              Et l’histoire continue…
                          </h3>
                          <p className="helping-one__text">
                              Aujourd’hui, UMLA poursuit sa mission avec rigueur et engagement : venir en aide aux personnes en situation de vulnérabilité, sur le terrain, là où les besoins sont les plus urgents. Nos actions s’étendent de l’itinérance urbaine aux familles réfugiées, en passant par les communautés touchées par des crises ou des catastrophes.
                          </p>
                          <p className="helping-one__text">
                              Ce travail, nous le menons grâce à une équipe engagée, des bénévoles dévoués et des partenaires qui croient en notre impact. Chaque distribution, chaque projet est pensé avec sérieux, transparence et efficacité.
                          </p>
                          <p className="helping-one__text">
                              Et nous continuerons. Tant qu’il y aura des besoins, tant qu’il sera possible d’agir concrètement. Car nous croyons que chaque geste compte. Et que l’engagement de chacun peut faire toute la différence.
                          </p>
                          <p className="helping-one__text">
                              Rejoignez-nous. Ensemble, faisons de la solidarité une force durable.
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
