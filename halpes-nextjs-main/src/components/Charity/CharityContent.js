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
          <span className="section-title__tagline">Bienvenue à notre charité</span>
          <h2 className="section-title__title">
            Aider les autres peut rendre le monde meilleur
          </h2>
        </div>
        <p className="welcome-one__right-text">
        Apporter de l&apos;aide concrète, humaine et digne aux personnes en situation de vulnérabilité. Qu&apos;il s&apos;agisse de personnes sans-abris, de familles marginalisées ou d&apos;individus isolés, nous tendons la main, toujours avec <strong>respect, bienveillance et constance</strong>.<br/>
        UMLA, c&apos;est une communauté vivante, unie par les valeurs <strong>d&apos;entraide, de justice sociale et de fraternité</strong>. Ensemble, on nourrit les corps et on réchauffe les coeurs.
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
        <a href="#" className="welcome-one__btn thm-btn">
          <i className="fas fa-arrow-circle-right"></i>En savoir plus
        </a>
      </div>
    </Col>
  );
};

export default CharityContent;
