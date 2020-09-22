import types from "prop-types";
import React from "react";



import "./../../../../../../styles/index.scss";
import "./styles.scss";


export const CardHover = ({ cardsData, socialData }) => {
  return (
    <div className="projects__card-hover">
      <div className="projects__card-hover-content">
        <div className="projects__card-hover-name">{cardsData.name}</div>
        <div className="projects__card-hover-position">{cardsData.position}</div>
        <div className="projects__card-hover-text">{cardsData.text}</div>
      </div>

    </div>
  );
};

CardHover.propTypes = {
  cardsData: types.any,
  socialData: types.any,
};

CardHover.defaultProps = {};
