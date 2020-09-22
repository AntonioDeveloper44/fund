import React from 'react';
import { HeaderSimulator } from '../../components/HeaderSimulator/HeaderSimulator';
import './styles.scss'
import { TitleBlock } from '../../components/TitleBlock';
import Slider from 'react-slick';
import { cardsData, defaultSettings, socialData } from '../CannaLanding/components/Projects/data';
import { CardHover } from '../CannaLanding/components/Projects/components/CardHover';
import { ContentContainer } from '../../components/ContentContainer';

export const News = () => {
  return (
    <>
      <HeaderSimulator/>
      <div className='news'>
        News will be here soon:)
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
          </div>
        </ContentContainer>
      </div>
    </>
  );
};