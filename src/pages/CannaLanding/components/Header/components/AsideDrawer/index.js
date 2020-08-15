import classNames from 'classnames';
import React from 'react';
// Styles

import './styles.scss';
import { Link } from 'react-scroll';

// ----------------

const AsideDrawer = ({ links, isOpen }) => {
  const modify = classNames({
    'aside--is-open': isOpen,
  });

  // Render

  return (
    <>
      <aside className={`aside ${modify}`}>

        {links.map(link => {
          return (
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
              <div className='navlink'>
              <span>{link.label}</span>
              </div>

            </Link>

          );
        })}
      </aside>
    </>
  );
};

export default AsideDrawer;
