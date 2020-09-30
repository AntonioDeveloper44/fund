import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
// Components

import { TabsCBD } from './components/TabsCBD';

//Data

// Styles

import './styles.scss';
import './../../../../styles/index.scss';
import { defaultSettings } from './data';

import { ReviewsCard } from './components/ReviewsCard';
import sliderImageMain from '../../../../assets/images/boardHd.jpg';
import sliderImageSecondary from '../../../../assets/images/handsHd.jpg';
import sliderImageAdditional from '../../../../assets/images/reviewsImageTony.jpg';
import { useTranslation } from 'react-i18next';

// ---------------

export const OurFund = () => {
  //Render
  const { t } = useTranslation();
  const reviewsSlides = [
    {
      image: sliderImageMain,
      id: '0',
      description: t('slider1desc1'),
    },
    {
      image: sliderImageSecondary,
      id: '2',
      description: t('slider1desc2'),
    },
    {
      image: sliderImageAdditional,
      id: '3',
      description: t('slider1desc3'),
    },
  ];
  return (
    <div className="ourFund" id="ourFund">
      <div className="ourFund__content">
        <TabsCBD />
      </div>

      <div className="ourFundSlider">
        <Slider {...defaultSettings} className="reviews__slider">
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
