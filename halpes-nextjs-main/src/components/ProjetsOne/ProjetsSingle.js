import React from "react";
import { Image } from "react-bootstrap";

const ProjetsSingle = ({ cause = {}, causePage }) => {

  const { image, category, title, description } = cause;

  return (
    <div className={causePage ? "" : "my-4"}>
      <div className="causes-single_item" style={causePage ? {} : { userSelect: "none" }}>
        <div className="causes-one__img">
          <div className="causes-one__img-box">
            <Image
              src={`/images/projets-page/${image}`}
              alt=""
            />

          </div>
          <div className="causes-one__category" style={{ display: "none" }}>
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-one__content">
          <h3 className="causes-one__title">
            {title}
          </h3>
          <p className="causes-one__text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjetsSingle;
