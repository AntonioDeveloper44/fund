import types from "prop-types";
import React from "react";

import "./styles.scss";

export const TitleBlock = ({
  className,
  maxWidth,
  title,
  secondTitle,
  subtitle,
  description,
  align,
  titleColor,
  textColor,
  desc
}) => {
  return (
    <div
      className={`title-block ${className}__title-block ${
        !!align && `title-block--align-${align}`
      }`}
      style={{ maxWidth: `${maxWidth * 1 + 16 * 2}px` }}
    >
      <p
        className={`title-block--title ${className}__title-block--title ${
          !!titleColor && `title-block--title-color-${titleColor}`
        }`}
      >
        {title}
      </p>
      <p
        className={`title-block--second-title ${className}__title-block--second-title ${
          !!titleColor && `title-block--title-color-${titleColor}`
        }`}
      >
        {secondTitle}
      </p>
      <p
        className={`title-block--subtitle ${className}__title-block--subtitle ${
          !!textColor && `title-block--subtitle-color-${textColor}`
        }`}
      >
        {subtitle}
      </p>
      <p
        className={`title-block--description ${className}__title-block--description ${
          !!textColor && `title-block--description-color-${textColor}`
        }`}
      >
        {description}
        {desc}
      </p>
    </div>
  );
};

TitleBlock.propTypes = {
  maxWidth: types.string,
  title: types.string.isRequired,
  subtitle: types.string,
  description: types.string,
  align: types.oneOf(["left", "center", "right"]),
  titleColor: types.oneOf([
    "primaryLightGrey",
    "primaryMiddleGrey",
    "primaryDarkYellow",
    "white",
  ]),
  textColor: types.oneOf(["primaryDarkGrey", "white"]),
};

TitleBlock.defaultProps = {
  titleColor: "white",
  textColor: "primaryDarkGrey",
  align: "center",
  maxWidth: "100%",
};
