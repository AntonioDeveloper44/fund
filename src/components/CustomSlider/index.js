import React, { Component } from 'react';

import Slider from 'react-slick';
import types from 'prop-types';
import { FontIcon } from '../FontIcon';

// Styles

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} font-icon-wrap`} onClick={onClick}>
      <FontIcon icon="forward" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} font-icon-wrap`} onClick={onClick}>
      <FontIcon icon="forward" rotate180 />
    </div>
  );
}

// ----------------

class CustomSlider extends Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  render() {
    const { children, className, customSettings } = this.props;
    // customSettings
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      ...customSettings,
    };

    return (
      <Slider
        {...settings}
        {...customSettings}
        className={`slider ${className}`}
      >
        {children}
      </Slider>
    );
  }
}

export { CustomSlider };
