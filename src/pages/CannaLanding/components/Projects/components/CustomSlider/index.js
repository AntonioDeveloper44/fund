import React, { Component } from 'react';

import Slider from 'react-slick';
import types from 'prop-types';
import { FontIcon } from '../../../../../../components/FontIcon';

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
      <FontIcon icon="forward" rotate180 size="xxxl" />
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
    const { children, className } = this.props;

    const defaultSettings = {
      dots: false,
      infinite: true,
      fade:true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
      <Slider {...defaultSettings} className={`slider ${className}`}>
        {children}
      </Slider>
    );
  }
}

export { CustomSlider };
