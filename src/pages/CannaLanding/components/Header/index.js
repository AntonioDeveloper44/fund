import React, { useState , useEffect } from 'react';
import classNames from "classnames";

// Components
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';

// Static
import { navigationLinks } from './data';
// Assets
import logo from '../../../../assets/images/logo.png'
// Styles
import HamburgerButton from './components/HamburgerButton';
import AsideDrawer from './components/AsideDrawer';
import './styles.scss';
// ----------------

const headerHeight = 80;
const useCurrentPosition = () => {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export const Header = (props) => {
  const currentPosition = useCurrentPosition();

  const [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  const modify = classNames({
    " header--on-scroll": currentPosition >= 30,
  });
  // Render

  return (
    <div className={`header${modify}`}>
      <div className="header__content">
        <HamburgerButton
          handleClick={handleToggleAside}
          className="header__menu-btn-wrapper"
          isOpen={isAsideOpen}
        />
        <AsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
        <div className="header__left-block">
          <Navbar links={navigationLinks} />
        </div>
        <Logo maxWidth={120} image={logo}/>
      </div>
    </div>
  );
};

