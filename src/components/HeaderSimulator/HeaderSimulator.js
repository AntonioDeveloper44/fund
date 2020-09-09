import React from 'react';

import { Logo } from '../../pages/CannaLanding/components/Header/components/Logo';
import logo from '../../assets/images/logo.png';

import './styles.scss'
import Button from '../Button';
import { history } from '../../index';

export const HeaderSimulator = () => {
  return (
    <div className="header-simulator">
      <div className="header-simulator__content">
        <div className="header-simulator__left-block">
          <Button onClick={() => history.push('/home')}>На Головну</Button>


        </div>
        <Logo maxWidth={120} image={logo}/>
      </div>
    </div>
  );
};