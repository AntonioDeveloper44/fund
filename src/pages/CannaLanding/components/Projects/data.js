import { ReactSVG } from 'react-svg';
import React from 'react';

import pinterestIcon from '../../../../assets/SVG/social/pinterestIcon.svg';
import linkedinIcon from '../../../../assets/SVG/social/linkedinIcon.svg';
import fasebookIcon from '../../../../assets/SVG/social/fasebookIcon.svg';
import tvitterIcon from '../../../../assets/SVG/social/tvitterIcon.svg';
import skypeIcon from '../../../../assets/SVG/social/skypeIcon.svg';
import appleIcon from '../../../../assets/SVG/social/appleIcon.svg';

import arrowNext from '../../../../assets/SVG/ArrowNext.svg';
import arrowPrev from '../../../../assets/SVG/ArrowPrev.svg';

export const socialData = [
  {
    link: 'https://twitter.com/?lang=ru',
    icon: tvitterIcon,
  },
  {
    link: 'https://www.linkedin.com/',
    icon: linkedinIcon,
  },
  {
    link: 'https://facebook.com/',
    icon: fasebookIcon,
  },
  {
    link: 'https://www.skype.com/',
    icon: skypeIcon,
  },
  {
    link: 'https://www.pinterest.com/',
    icon: pinterestIcon,
  },
  {
    link: 'https://www.apple.com/',
    icon: appleIcon,
  },
];

export const defaultSettings = {
  dots: false,
  dotsClass: `slick-dots projects__slick-dots`,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 3,
  initialSlide: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  nextArrow: <ReactSVG src={arrowNext} />,
  prevArrow: <ReactSVG src={arrowPrev} />,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
