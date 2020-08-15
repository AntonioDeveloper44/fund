import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const DecorationElement = props => {
  // Modify styles

  const modify = classNames({
    ' DecorationElement': props,
  });

  // Render

  return (
    <div className={`decorationElement${modify}`}>
      <span></span>
      <p>Не бути байдужим - наша справа!</p>
    </div>
  );
};

// ----------------

// Type of props

DecorationElement.propTypes = {
  prop: types.string,
};

// Default value for props

DecorationElement.defaultProps = {};
