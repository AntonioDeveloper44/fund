import { Link } from 'react-scroll';
import React from 'react';

// Styles

import './styles.scss';
import { useTranslation } from 'react-i18next';

// ----------------

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar">
      <Link
        className="navbar__item"
        activeClass="navbar__item--active"
        to="ourFund"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        <div className="navbar__item-indicator"></div>
        {t('headerLink1')}
      </Link>
      <Link
        className="navbar__item"
        activeClass="navbar__item--active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        <div className="navbar__item-indicator"></div>
        {t('headerLink2')}
      </Link>
      <Link
        className="navbar__item"
        activeClass="navbar__item--active"
        to="faq"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        <div className="navbar__item-indicator"></div>
        {t('headerLink3')}
      </Link>
      <Link
        className="navbar__item"
        activeClass="navbar__item--active"
        to="footer"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        <div className="navbar__item-indicator"></div>
        {t('headerLink4')}
      </Link>
    </div>
  );
};

// ----------------
