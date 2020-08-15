import React from 'react';

//Styles

import './styles.scss';
import { TitleBlock } from '../../../../../../components/TitleBlock';

//----------------

export const ReviewsCard = ({ image, desc }) => {
  //Modify styles

  // Render
  return (
    <div className={`reviews-card`}>
      <div className="reviews-card__info">
        <TitleBlock title="Our Fund" subtitle="Наш Фонд" className="ourPhund"
                    maxWidth="1000"
                    description='opisaniye' />
      </div>
        <div className="reviews-card__image-wrap">
          <img
            className="reviews-card__image img-contain"
            src={image}
            alt="poorMan"
          />
        </div>
    </div>
  );
};
