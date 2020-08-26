import React from "react";

import imgCard1 from "../../../../assets/images/author.jpg";

import pinterestIcon from "../../../../assets/SVG/social/pinterestIcon.svg";
import linkedinIcon from "../../../../assets/SVG/social/linkedinIcon.svg";
import fasebookIcon from "../../../../assets/SVG/social/fasebookIcon.svg";
import tvitterIcon from "../../../../assets/SVG/social/tvitterIcon.svg";
import skypeIcon from "../../../../assets/SVG/social/skypeIcon.svg";
import appleIcon from "../../../../assets/SVG/social/appleIcon.svg";

export const cardsData = [
  {
    cardImg: <img height="100%" alt="hero" src={imgCard1} />,
    name: "Діденко Ольга",
    position: "властник фонду",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  }];

export const socialData = [
  {
    link: "https://twitter.com/?lang=ru",
    icon: tvitterIcon,
  },
  {
    link: "https://www.linkedin.com/",
    icon: linkedinIcon,
  },
  {
    link: "https://facebook.com/",
    icon: fasebookIcon,
  },
  {
    link: "https://www.skype.com/",
    icon: skypeIcon,
  },
  {
    link: "https://www.pinterest.com/",
    icon: pinterestIcon,
  },
  {
    link: "https://www.apple.com/",
    icon: appleIcon,
  },
];