import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const countBar = [
  {
    id: 1,
    title: "Charité",
    percent: 83,
  },
  {
    id: 2,
    title: "Donations",
    percent: 38,
  },
];

const CharityContent = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__right">
        <div className="section-title text-left">
                  <span className="section-title__tagline">Une Main Lave l&apos;Autre</span>
          <h2 className="section-title__title">
                      Un geste à la fois, on restaure la dignité humaine.
          </h2>
        </div>
        <p className="welcome-one__right-text">
                  Depuis 2021, UMLA agit sur le terrain pour répondre aux besoins vitaux des personnes vulnérables à Montréal et ailleurs : repas, vêtements, hygiène, refuge. Mais au-delà de l’aide matérielle, nous recréons du lien humain, brisons l’isolement, et redonnons espoir.<br/>
                    Nos actions sont portées par des valeurs de <strong>compassion</strong>, <strong>entraide</strong> et <strong>dignité</strong >, enracinées dans une vision universelle : chaque être humain mérite d’être vu, entendu et soutenu.
        </p>
        <div className="welcome-one__our-mission-and-story">
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Notre Mission
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              Nourrir les corps et réchauffer les coeurs. Donner de l&apos;espoir aux personnes en difficulté. Vêtir les personnes en difficulté.
            </p>
          </div>
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Notre Histoire
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              Fournir de l&apos;aide depuis 2021. Nous sommes une équipe de bénévoles qui travaille ensemble pour aider les personnes en difficulté.
            </p>
          </div>
        </div>
        <div className="welcome-one__progress">
          {countBar.map(({ id, title, percent }) => (
            <div className="welcome-one__progress-single" key={id}>
              <h4 className="welcome-one__progress-title">{title}</h4>
              <ReactVisibilitySensor
                offset={{ top: 10 }}
                delayedCall={true}
                onChange={onVisibilityChange}
              >
                <div className="bar">
                  <div
                    className="bar-inner count-bar"
                    data-percent={`${countStart ? percent : 0}%`}
                    style={{
                      width: `${countStart ? percent : 0}%`,
                      opacity: 1,
                    }}
                  >
                    <div
                      className="count-text"
                      style={{ opacity: countStart ? 1 : 0 }}
                    >
                      {countStart ? percent : 0}%
                    </div>
                  </div>
                </div>
              </ReactVisibilitySensor>
            </div>
          ))}
        </div>
        <a href="#" className="welcome-one__btn thm-btn" style={{ display: "none" }}>
          <i className="fas fa-arrow-circle-right"></i>En savoir plus
        </a>
      </div>
    </Col>
  );
};

export default CharityContent;
