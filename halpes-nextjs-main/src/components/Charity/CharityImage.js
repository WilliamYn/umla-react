import React from "react";
import { Col, Image } from "react-bootstrap";

const CharityImage = () => {
  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__left">
        <div className="welcome-one__img-box">
          <Image src="/images/main-page-images/main-vertical-image.jpg" alt="" />
          <div className="welcome-one__img-box-2">
            <Image src="/images/main-page-images/main-horizontal-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CharityImage;
