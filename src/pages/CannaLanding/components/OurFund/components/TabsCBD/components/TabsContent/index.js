import React, { Fragment } from 'react';

// Styles

import './styles.scss';


// ----------------

export const TabsContent = ({ images ,title, title2, title3, text1 , text2, text3, text4, text5, text6, text7,text8,text9 }) => {
  return (
    <div className="tabs-content">


          <div  className="tabs-content__text-block">
            <p>{title}</p>

            <p>
              {text1}
            </p>
            <p>
              {text2}
            </p>
            <p>
              {text3}
            </p>
          </div>


      <div className="tabs-content__images">
        {images.map(({ image }, index) => {
          return (
            <div key={index} className="image-wrap">
              <img src={image} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
