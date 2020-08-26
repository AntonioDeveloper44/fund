
import React from 'react';

// Components


import { InfoBlock } from './components/InfoBlock';
import { DecorationElement } from './components/DecorationElement';
import { TopDecorationElement } from './components/TopDecorationElement';

// Styles
import './styles.scss';
// ----------------

export const SectionHero = props => {
  //Render

  return (
    <div className="hero" >
        <div className="hero__content">
          <TopDecorationElement />
          <InfoBlock />
          <DecorationElement />
        </div>
    </div>
  );
};


