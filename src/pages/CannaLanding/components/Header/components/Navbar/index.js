import types from 'prop-types';
import { Link } from 'react-scroll';
import React, { Fragment } from 'react';

// Styles

import './styles.scss';

// ----------------

export const Navbar = ({ links }) => {

  return (
    <div className="navbar">
      {links.map(( link , index) => {
        return (
          <Fragment key={index}>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              isDynamic={true}
            >
          <div className='navbar__item-indicator'></div>
              {link.label}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};

// ----------------

Navbar.propTypes = {
  prop: types.string,
  active: types.bool,
};

// Default value for props

Navbar.defaultProps = {};
