import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
// Components

import { TabsCBD } from './components/TabsCBD';


//Data

// Styles

import './styles.scss';
import './../../../../styles/index.scss';
import { defaultSettings } from './data';

import { reviewsSlides } from './components/ReviewsCard/data';
import { ReviewsCard } from './components/ReviewsCard';


// ---------------

export const OurFund = () => {
  //Render

  return (
    <div className="ourFund" id="ourFund">

      <div className="ourFund__content">
        <TabsCBD/>
      </div>

      <div className="ourFundSlider">
        <Slider {...defaultSettings} className="reviews__slider" >
          {reviewsSlides.map((item, index) => {
            return (
              <ReviewsCard
                key={index}
                className="reviews__card"
                description={item.description}

                image={item.image}
                id={item.id}
              />
            );
          })}
        </Slider>
      </div>

    </div>
  );
};
