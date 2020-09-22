import { ReactSVG } from "react-svg";
import React from "react";

import imgCard1 from "../../../../assets/images/santehn.jpg";
import imgCard2 from "../../../../assets/images/nan.jpg";
import imgCard3 from "../../../../assets/images/houseRepair.jpg";
import imgCard4 from "../../../../assets/images/heartQure.jpg";
import imgCard5 from "../../../../assets/images/carDIO.jpg";




import pinterestIcon from "../../../../assets/SVG/social/pinterestIcon.svg";
import linkedinIcon from "../../../../assets/SVG/social/linkedinIcon.svg";
import fasebookIcon from "../../../../assets/SVG/social/fasebookIcon.svg";
import tvitterIcon from "../../../../assets/SVG/social/tvitterIcon.svg";
import skypeIcon from "../../../../assets/SVG/social/skypeIcon.svg";
import appleIcon from "../../../../assets/SVG/social/appleIcon.svg";

import arrowNext from "../../../../assets/SVG/ArrowNext.svg";
import arrowPrev from "../../../../assets/SVG/ArrowPrev.svg";

export const cardsData = [
  {
    cardImg: <img height="100%" alt="hero" src={imgCard1} />,
    name: "Сантехнічні роботи",
    position: "Заміна труб водопостачання",
    text:
      "Хочу подякувати фонд Віра Надія Любов. Моїй сусідці вони безкоштовно поміняли унітаз та всю сантехніку. Сусідка живе сама. 85 років. Від її імені дякую працівників цього фонду.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard2} />,
    name: "Допомога матері-одиночці",
    position: "Ліки та дитяче харчування",
    text:
      "Я, мать одиночка. У меня родился сын у которого аллергия на лекарства и лактозу детского питания. Я прочитала о фонде в интернете. Необходимо было сделать дорогостоящие прививки ребёнку и ежедневное питания. Мне много раз оказывали помощь. Спасибо фонду \"Вера, Надежда, Любовь\" Васильева Татьяна",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard3} />,
    name: 'Ремонт будівлі',
    position: "Допомога після повеню у селі",
    text:
      "Я, многодетная мать. Живу в селе в стареньком доме. Прошёл ливень и разрушил часть дома, мне соседи подсказали, что есть фонд помощи \"Вера, Надежда, Любовь\" и как к ним обратиться. И мне была оказана помощь на ремонт дома. Спасибо. Плыз Людмила",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard4} />,
    name: "Тяжка хвороба серця",
    position: "Ліки та діагностика",
    text:
      "Я, пенсионерка. У меня была обнаружена болезнь сердца. Для лечения необходимы были дорогостоящие лекарства и анализы. Мне в больнице подсказали что есть, такой фонд помощи \"Вера, Надежда, Любовь\", я много прочитала хороших отзывов о фонде и тоже решила обратиться за помощью и мне не отказали. Спасибо. Талапа В.Я.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard5} />,
    name: "Піклування за пенсіонеркою",
    position: "Ліки та діагностика",
    text:
      "Благодарю благотворительный фонд, Вера, Надежда, Любовь за помощь. Мне 72 года. Живу одна. Месяц назад попала в больницу с проблемами сердца. Денег на лечение не было. Подсказали что можно обратиться за помощью в этот фонд. И они мне помогли. Закупили всё необходимое для лечения. На 25 тысяч гривен и привозили продукты питания. Благодарю вас, добрые люди!!! Побольше бы таких!!! Валя.",
  },
];

export const socialData = [
  {
    link: "https://twitter.com/?lang=ru",
    icon: tvitterIcon,
  },
  {
    link: "https://www.linkedin.com/",
    icon: linkedinIcon,
  },
  {
    link: "https://facebook.com/",
    icon: fasebookIcon,
  },
  {
    link: "https://www.skype.com/",
    icon: skypeIcon,
  },
  {
    link: "https://www.pinterest.com/",
    icon: pinterestIcon,
  },
  {
    link: "https://www.apple.com/",
    icon: appleIcon,
  },
];

export const defaultSettings = {
  dots: false,
  dotsClass: `slick-dots projects__slick-dots`,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 3,
  initialSlide: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  nextArrow: <ReactSVG src={arrowNext} />,
  prevArrow: <ReactSVG src={arrowPrev} />,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
