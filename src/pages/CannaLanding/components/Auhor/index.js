import React from 'react';

//Components
import { TitleBlock } from '../../../../components/TitleBlock';

//Data
import { cardsData, socialData } from './data';
import { CardHover } from "./CardHover";

//Styles
import './styles.scss';

//----------------------

export const Author = () => {
  //Render

  return (
    <div className="author-block" id="author">
      <div className="author-description">

      </div>


    <div className={`expert__info`}>
      <TitleBlock
        className="author-title"
        maxWidth="500"
        title="Засновник"
        subtitle="Діденко Ольга"
        description="Molestie ultricies quam. Donec at sem. Praesent pretium. Maorbi quis nulla vehicula felsd laoreet.     Sed ullamcorper arcu ente. Sed tempus tempor cild  Nulla vierra ultrices magnal Nam rutrum congue diam.do eiusmod tempor incididunt ut dolore magna aliqua. Utdi eni ad minim veniam, quis nostrud exercitationconsequat."
      />



    </div>
    </div>
  );
};


