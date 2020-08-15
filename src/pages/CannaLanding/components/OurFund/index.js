import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
// Components

import { TabsCBD } from './components/TabsCBD';

import { ReviewsCard } from '../Projects/components/ReviewsCard';
import { CustomSlider } from '../Projects/components/CustomSlider';

//Data
import { reviewsSlides } from '../Projects/components/ReviewsCard/data';
// Styles

import './styles.scss';
import './../../../../styles/index.scss';

// ---------------

export const OurFund = () => {
  //Render

  return (
    <div className="ourFund" id="ourFund">

      <div className="ourFund__content">
        <TabsCBD/>
      </div>

      <div className="ourFundSlider">
        <Slider className="reviews__slider" arrows="false">
          {reviewsSlides.map((item) => {
            return (
              <ReviewsCard
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
