import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Button = ({
  border,
  fluidWidth,
  children,
  onClick,
  color,
  size,
  margin,
}) => {
  // Modify styles

  const modify = classNames({
    [` button--color-${color}`]: color,
    [` button--size-${size}`]: size,
    [` button--border-${border}`]: border,
    ' button--withMargin': margin,
    ' button--fluid-width': fluidWidth,
  });

  // Render

  return (
    <button className={`button${modify}`} onClick={onClick}>
      {children}
    </button>
  );
};

// ----------------

// Type of props

Button.propTypes = {
  fluidWidth: types.bool,
  withMargin: types.bool,
  children: types.node.isRequired,
  onClick: types.func.isRequired,
  color: types.oneOf(['secondary', 'primary']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg']),
  border: types.oneOf(['withBorder', 'leftBorder']),
};

// Default value for props

Button.defaultProps = {
  fluidWidth: false,
  color: 'primary',
  size: 'md',
  border: 'withBorder',
  margin: false,
};

export default Button;
