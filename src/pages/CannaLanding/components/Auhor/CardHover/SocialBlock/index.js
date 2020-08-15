import { ReactSVG } from "react-svg";
import types from "prop-types";
import React from "react";

import "./styles.scss";

export const SocialBlock = ({ className, socialData }) => {
  return (
    <div
      className={`social-block ${!!className && `${className}__social-block`}`}
    >
      {socialData.map(({ icon, link }, index) => {
        return (
          <a
            className={`social-item--wrapper ${
              !!className && `${className}__social-item--wrapper`
            }`}
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            key={index}
          >
            <ReactSVG
              className={`social-item ${
                !!className && `${className}__social-item`
              }`}
              src={icon}
            />
          </a>
        );
      })}
    </div>
  );
};

SocialBlock.propTypes = {
  className: types.string,
  socialData: types.any,
};

SocialBlock.defaultProps = {};
