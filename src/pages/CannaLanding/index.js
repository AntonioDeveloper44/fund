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

import { Redirect, Route } from 'react-router-dom';
import { News } from '../News/News';
import { Payment } from '../Payment/Payment';


// --------------------
export const Landing = () => {
  return (
    <div className="landing">

      <Redirect exact from='/' to='/home'/>

      <Route path="/home">
        <Header/>
        <SectionHero/>
        <OurFund/>
        <Author/>{/*вставьте сервисы оплаты сюда */}
        <Projects/>
        <Footer/>
      </Route>

      <Route path='/news'><News/></Route>
      <Route path='/help'><Payment/></Route>

      <BackTop/>
    </div>
  );
};
