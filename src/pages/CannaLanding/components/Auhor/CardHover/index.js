import types from "prop-types";
import React from "react";

import { SocialBlock } from "./SocialBlock";

import "./styles.scss";

export const CardHover = ({ cardsData, socialData }) => {
  return (
    <div className="expert__card-hover">
      <div className="expert__card-hover-content">
        <div className="expert__card-hover-name">{cardsData.name}</div>
        <div className="expert__card-hover-position">{cardsData.position}</div>
        <div className="expert__card-hover-text">{cardsData.text}</div>
      </div>
      <SocialBlock className="expert" socialData={socialData} />
    </div>
  );
};

CardHover.propTypes = {
  cardsData: types.any,
  socialData: types.any,
};

CardHover.defaultProps = {};
