import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";

import "./../../../../styles/index.scss";
import "./styles.scss";
import { Button } from 'antd';
import { history } from '../../../../index';

export const Projects = (props) => {
  //Render
  return (
    <div className="projects" id="projects">
      <ContentContainer>
        <div className="projects__content">

          <div className="allProjectsButton">
          <Button onClick={() => history.push('/news')}>УСІ ПРОЕКТИ</Button>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
