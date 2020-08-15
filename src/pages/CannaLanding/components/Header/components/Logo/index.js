import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Logo = ({ maxWidth, image, svg }) => {

  return (
    <div className="logo" style={{ maxWidth: `${maxWidth}px` }}>
      {!!image && <img src={image} alt="logo-img" />}
      <p>Trust Hope Love! </p>
    </div>
  );
};

// ----------------

Logo.propTypes = {
  image: types.string,
  svg: types.string,
};


