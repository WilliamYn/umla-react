import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

const SingleBox = ({ singleBox }) => {
  const { icon, title, className, text } = singleBox;

  return (
    <Col xl={4}>
      <div className={`three-boxes__single ${className}`}>
        <div
          className="three-boxes__single-bg"
          style={{ backgroundImage: `url(/images/backgrounds/umla-bg-2.jpg)` }}
        ></div>
        <div className="three-boxes__content">
          <div className="three-boxes__icon">
            <span className={icon}></span>
          </div>
          <div className="three-boxes__text-box">
            <h2>{title}</h2>
            <p className="three-boxes__text">
            {text}
            </p>
            <Link href="/causes-details">
              <a className="three-boxes__btn">
                <i className="fa fa-heart"></i>Donner{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBox;
