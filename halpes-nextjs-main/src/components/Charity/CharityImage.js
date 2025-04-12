import React from "react";
import { Col, Image } from "react-bootstrap";

const CharityImage = () => {
  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__left">
        <div className="welcome-one__img-box">
          <Image src="/images/resources/umla-food-2.jpg" alt="" />
          <div className="welcome-one__img-box-2">
            <Image src="/images/resources/umla-food-1.jpg" alt="" />
          </div>
          <h2 className="welcome-one__bottom-text">Aider aujourd&apos;hui</h2>
          <div className="welcome-one__heart-icon">
            <Image src="/images/resources/welcome-one-heart-icon.png" alt="" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CharityImage;
