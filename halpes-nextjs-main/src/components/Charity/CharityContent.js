import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import charity from "@/data/charity.json";

const countBar = charity.countBar;

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
          <span className="section-title__tagline">{charity.tagline}</span>
          <h2 className="section-title__title">
            {charity.title}
          </h2>
        </div>
        <p className="welcome-one__right-text">
          {charity.paragraphs[0]}<br/>
          {charity.paragraphs[1]}
        </p>
        <div className="welcome-one__our-mission-and-story">
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>{charity.missionTitle}
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              {charity.missionText}
            </p>
          </div>
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>{charity.historyTitle}
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              {charity.historyText}
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
          <i className="fas fa-arrow-circle-right"></i>{charity.ctaLabel}
        </a>
      </div>
    </Col>
  );
};

export default CharityContent;
