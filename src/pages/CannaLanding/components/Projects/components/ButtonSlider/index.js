import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ButtonSlider = ({
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

ButtonSlider.propTypes = {
  fluidWidth: types.bool,
  withMargin: types.bool,
  children: types.node.isRequired,
  onClick: types.func.isRequired,
  color: types.oneOf(['secondary', 'primary', 'slider']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg']),
  border: types.oneOf(['withBorder', 'leftBorder']),
};

// Default value for props

ButtonSlider.defaultProps = {
  fluidWidth: false,
  color: 'slider',
  size: 'md',
  border: 'withBorder',
  margin: false,
};

export default ButtonSlider;
