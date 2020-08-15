import React from 'react';

// Components
import { Header } from './components/Header';
import { SectionHero } from './components/SectionHero';
import { OurFund } from './components/OurFund';
import { Author } from './components/Auhor';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { BackTop } from 'antd';

// Styles

import './styles.scss';

// --------------------

export const CannaLanding = () => {
  return (
    <div className="landing">
      <Header/>
      <SectionHero/>
      <OurFund/>{/*наш фонд */}
      <Author/>{/*основатель */}
      <Projects/> {/*проэкти*/}
      <Footer/>{/*контакти */}
      <BackTop/>
    </div>
  );
};
