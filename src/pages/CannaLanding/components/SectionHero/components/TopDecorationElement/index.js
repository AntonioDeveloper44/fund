import React from 'react';

// Styles

import './styles.scss';
import { useTranslation } from 'react-i18next';

// ----------------

export const TopDecorationElement = props => {

 const {t} = useTranslation()
  // Render

  return (
    <div className="topDecorationElement">
      <span></span>
      <p>{t('topElem')}</p>
      <span></span>
    </div>
  );
};




