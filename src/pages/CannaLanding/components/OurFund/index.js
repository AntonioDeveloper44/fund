import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
// Components

import { TabsCBD } from './components/TabsCBD';

import { ReviewsCard } from '../Projects/components/ReviewsCard';

//Data
import { reviewsSlides } from '../Projects/components/ReviewsCard/data';
// Styles

import './styles.scss';
import './../../../../styles/index.scss';
import { defaultSettings } from './data';


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
                description={item.desc}

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
