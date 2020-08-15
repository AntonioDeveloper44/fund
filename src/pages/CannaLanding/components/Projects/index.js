import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { CardHover } from "./../Auhor/CardHover/index";

import { cardsData, socialData } from "./data";
import { defaultSettings } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const Projects = (props) => {
  //Render
  return (
    <div className="projects" id="projects">
      <ContentContainer>
        <div className="projects__content">
          <Slider {...defaultSettings} className={`expert__slider`}>
            {cardsData.map(({ cardImg, name, position }, index) => {
              return (
                <div className={`projects__card`} key={`1${index}`}>
                  <div
                    className={`projects__card-image`}
                    key={`2${index}`}
                    style={{ overflow: "hidden" }}
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
  );
};
