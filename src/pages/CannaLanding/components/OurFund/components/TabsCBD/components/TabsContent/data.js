import React from "react";
import { ReactSVG } from "react-svg";

import tabsImageMountin from '../../../../../../../../assets/images/tabsImageMountain.png';
import tabsImageField from '../../../../../../../../assets/images/TabsImageField.png';
import kids from './../../../../../../../../assets/images/help.jpg'
import kidsAgain from './../../../../../../../../assets/images/helptoo.jpg'
import handsHeart from '../../../../../../../../assets/images/handsHeart.png'
import heartLock from '../../../../../../../../assets/images/heartLock.jpg'


import responsiveDesign from "../../../../../../../../assets/SVG/Marvel/2.About-Responsive_Design.svg";
import powerfulSecurity from "../../../../../../../../assets/SVG/Marvel/2.About-Powerful_Security.svg";
import awesomeFeatures from "../../../../../../../../assets/SVG/Marvel/2.About-Awesome_Features.svg";


export const dataBlock = [
  {
    title: 'Title',
  },
];

export const images = [
  {
    image: kidsAgain
  }
];

export  const imagesSecond = [

  {
    image: kids
  },
]

export const imagesThird = [
  {
    image:handsHeart
  },
]


export const data = [
  {
    row: [
      {
        icon: <ReactSVG src={responsiveDesign} />,
        title: "Responsive Design",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitelquam. Fusce quis nulla tincidunt interdum magna vitae.",
      },
    ],
  },
  {
    row: [
      {
        icon: <ReactSVG src={awesomeFeatures} />,
        title: "Awesome Features",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitelquam. Fusce quis nulla tincidunt interdum magna vitae.",
      },
    ],
  },
  {
    row: [
      {
        icon: <ReactSVG src={powerfulSecurity} />,
        title: "Powerful Security",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitelquam. Fusce quis nulla tincidunt interdum magna vitae.",
      },
    ],
  },
];