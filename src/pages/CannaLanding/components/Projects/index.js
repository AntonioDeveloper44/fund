import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React from 'react';
import { ContentContainer } from '../../../../components/ContentContainer';
import './../../../../styles/index.scss';
import './styles.scss';
import { Button } from 'antd';
import { history } from '../../../../index';

import Slider from 'react-slick';
import { defaultSettings, socialData } from './data';
import { CardHover } from './components/CardHover';
import { TitleBlock } from '../../../../components/TitleBlock';
import { useTranslation } from 'react-i18next';

import imgCard1 from '../../../../assets/images/santehn.jpg';
import imgCard2 from '../../../../assets/images/nan.jpg';
import imgCard3 from '../../../../assets/images/houseRepair.jpg';
import imgCard4 from '../../../../assets/images/heartQure.jpg';
import imgCard5 from '../../../../assets/images/carDIO.jpg';

export const Projects = (props) => {
  //Render
  const { t } = useTranslation();

  const cardsData = [
    {
      cardImg: <img height="100%" alt="hero" src={imgCard1} />,
      name: 'Сантехнічні роботи',
      position: 'Заміна труб водопостачання',
      text:
        'Хочу подякувати фонд Віра Надія Любов. Моїй сусідці вони безкоштовно поміняли унітаз та всю сантехніку. Сусідка живе сама. 85 років. Від її імені дякую працівників цього фонду.',
    },
    {
      cardImg: <img height="100%" alt="hero" src={imgCard2} />,
      name: 'Допомога матері-одиночці',
      position: 'Ліки та дитяче харчування',
      text:
        'Я, мать одиночка. У меня родился сын у которого аллергия на лекарства и лактозу детского питания. Я прочитала о фонде в интернете. Необходимо было сделать дорогостоящие прививки ребёнку и ежедневное питания. Мне много раз оказывали помощь. Спасибо фонду "Вера, Надежда, Любовь" Васильева Татьяна',
    },
    {
      cardImg: <img height="100%" alt="hero" src={imgCard3} />,
      name: 'Ремонт будівлі',
      position: 'Допомога після повеню у селі',
      text:
        'Я, многодетная мать. Живу в селе в стареньком доме. Прошёл ливень и разрушил часть дома, мне соседи подсказали, что есть фонд помощи "Вера, Надежда, Любовь" и как к ним обратиться. И мне была оказана помощь на ремонт дома. Спасибо. Плыз Людмила',
    },
    {
      cardImg: <img height="100%" alt="hero" src={imgCard4} />,
      name: 'Тяжка хвороба серця',
      position: 'Ліки та діагностика',
      text:
        'Я, пенсионерка. У меня была обнаружена болезнь сердца. Для лечения необходимы были дорогостоящие лекарства и анализы. Мне в больнице подсказали что есть, такой фонд помощи "Вера, Надежда, Любовь", я много прочитала хороших отзывов о фонде и тоже решила обратиться за помощью и мне не отказали. Спасибо. Талапа В.Я.',
    },
    {
      cardImg: <img height="100%" alt="hero" src={imgCard5} />,
      name: 'Піклування за пенсіонеркою',
      position: 'Ліки та діагностика',
      text:
        'Благодарю благотворительный фонд, Вера, Надежда, Любовь за помощь. Мне 72 года. Живу одна. Месяц назад попала в больницу с проблемами сердца. Денег на лечение не было. Подсказали что можно обратиться за помощью в этот фонд. И они мне помогли. Закупили всё необходимое для лечения. На 25 тысяч гривен и привозили продукты питания. Благодарю вас, добрые люди!!! Побольше бы таких!!! Валя.',
    },
  ];

  return (
    <div className="projects" id="projects">
      <ContentContainer>
        <div className="projects__content">
          <TitleBlock
            title={t('titleProjects')}
            subtitle={t('titleProjects')}
          />
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
                    <div
                      className={`projects__card-position`}
                      key={`6${index}`}
                    >
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
            <Button onClick={() => history.push('/news')}>
              {t('buttonProjects')}
            </Button>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
