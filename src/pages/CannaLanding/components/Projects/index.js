import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React from 'react';
import { ContentContainer } from '../../../../components/ContentContainer';
import './../../../../styles/index.scss';
import './styles.scss';
import { Button } from 'antd';
import { history } from '../../../../index';


import Slider from 'react-slick';
import { cardsData, defaultSettings, socialData } from './data';
import { CardHover } from './components/CardHover';
import { TitleBlock } from '../../../../components/TitleBlock';


export const Projects = (props) => {
  //Render
  return (
    <div className="projects" id="projects">
      <ContentContainer>
        <div className="projects__content">
          <TitleBlock title='Наші проекти' subtitle='НАШІ ДОБРІ СПРАВИ' />
          <Slider {...defaultSettings} className={`projects__slider`}>
            {cardsData.map(({ cardImg, name, position }, index) => {
              return (
                <div className={`projects__card`} key={`1${index}`}>
                  <div
                    className={`projects__card-image`}
                    key={`2${index}`}
                    style={{ overflow: 'hidden' }}
                  >
                    <>{cardImg}</>
                  </div>
                  <div className={`projects__card-title`} key={`3${index}`}>
                    <div className={`projects__card-name`} key={`5${index}`}>
                      {name}
                    </div>
                    <div className={`projects__card-position`} key={`6${index}`}>
                      {position}
                    </div>
                  </div>
                  <CardHover
                    cardsData={cardsData[index]}
                    socialData={socialData}
                  />
                </div>
              );
            })}
          </Slider>
          <div className="allProjectsButton">
            <Button onClick={() => history.push('/news')}>УСІ ПРОЕКТИ</Button>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
