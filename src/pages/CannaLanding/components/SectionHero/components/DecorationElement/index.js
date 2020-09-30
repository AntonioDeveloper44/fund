
import React from 'react';

// Styles

import './styles.scss';
import { useTranslation } from 'react-i18next';

// ----------------

export const DecorationElement = props => {
  // Modify styles



  // Render
 const {t} = useTranslation()
  return (
    <div className="decorationElement">
      <span></span>
      <p>{t('heroDecor')}</p>
    </div>
  );
};

// ----------------

// Type of props

