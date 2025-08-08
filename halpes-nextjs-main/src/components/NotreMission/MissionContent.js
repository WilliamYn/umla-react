import missionTexte from "@/data/missionTexte.json";
import { social } from "@/data/NavItems";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import SingleComment from "./SingleComment";
import Link from "next/link";
const {
  comments,
  summaryList,
  raised,
  goal,
  category,
  title,
  images,
  texts,
  summaryText,
  title2,
  texts2,
  title3,
  texts3,
  texts4,
  sectionTitleA,
  pillarsTitle,
  pillars,
  closingTitle,
} = missionTexte;

const MissionContent = () => {
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";

  return (
    <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box" style={{ display: "none" }}>
          <div className="causes-details__category" style={{ display: "none" }}>
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-details__progress" style={{ display: "none" }}>
          <div className="bar">
            <div
              className="bar-inner count-bar"
              style={{ width: percent, opacity: 1 }}
              data-percent={percent}
            >
              <div style={{ opacity: 1 }} className="count-text">
                {percent}
              </div>
            </div>
          </div>
          <div className="causes-details__goals" style={{ display: "none" }}>
            <p>
              <span>${raised}</span> Raised
            </p>
            <p>
              <span>${goal}</span> Goal
            </p>
          </div>
        </div>
      </div>
      <div className="causes-details__text-box">
        <h3>{title}</h3>
        {texts.map((text, index) => (
          <p key={index} className={`causes-details__text-${index + 1}`}>
            {text}
          </p>
        ))}
        <h3>{title2}</h3>
        {texts2.map((text, index) => (
          <p key={index} className={`causes-details__text-${index + 1}`}>
            {text}
          </p>
        ))}
        <h3>{sectionTitleA}</h3>
        <p className="hide">{title3}</p>
        {texts3.map((text, index) => (
          <p key={index} className={`causes-details__text-${index + 1}`}>
            {text}
          </p>
        ))}
        <h3>{pillarsTitle}</h3>
        {pillars.map((pillar, i) => (
          <div key={i}>
            <h4>{pillar.title}</h4>
            <p>{pillar.text}</p>
          </div>
        ))}
        <h3>{closingTitle}</h3>
        {texts4.map((text, index) => (
          <p key={index} className={`causes-details__text-${index + 1}`}>
            {text}
          </p>
        ))}
      </div>

      <div className="causes-details__summary">
        <div className="causes-details__summary-text hide">
          <p>{summaryText}</p>
        </div>
        <div className="causes-details__summary-list hide">
          <ul className="causes-details__summary-list-box list-unstyled">
            {summaryList.map((item, index) => (
              <li key={index}>
                <div className="icon">
                  <i className="fas fa-arrow-circle-right"></i>
                </div>
                <div className="text">
                  <p>{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="causes-details__images-box">
        <Row>
          {images.slice(0).map((image, index) => (
            <Col xl={6} lg={6} key={index}>
              <div className="causes-details__images-single">
                <Image src={image} alt="" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="causes-details__share">
        <div className="causes-details__share-btn-box">
          <Link href="/dons">
            <a className="causes-details__share-btn thm-btn">
              <i className="fas fa-arrow-circle-right"></i>Faire un don
            </a>
          </Link>
        </div>
        <div className="causes-details__share-social" style={{ display: "none" }}>
          {social.map(({ icon, link }, index) => (
            <a href={link} key={index}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="causes-details__download" style={{ display: "none" }}>
        <div className="causes-details__left">
          <div className="icon">
            <Image src="/images/resources/causes-details-download-icon.png" alt="" />
          </div>
          <div className="text">
            <h4>Our Presentation</h4>
          </div>
        </div>
        <div className="causes-details__download-btn-box">
          <a href="#" className="causes-details__download-btn thm-btn">
            <i className="fas fa-arrow-circle-right"></i>Download Now
          </a>
        </div>
      </div>
      <div className="comment-one" style={{ display: "none" }}>
        <h3 className="comment-one__title">Comments</h3>
        {comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default MissionContent; 