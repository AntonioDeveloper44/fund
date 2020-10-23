import React from 'react';
import { Tabs } from 'antd';
import {useTranslation} from "react-i18next";

//Styles
import './styles.scss';
import { TabContentPlanned } from './tabsContent/TabContentPlanned';
import { TabContentRealized } from './tabsContent/TabContentRealized';

//----------------------
const { TabPane } = Tabs;
export const Author = () => {
  //Render
    const { t } = useTranslation();

  return (
    <div className="author-block" id="author">
      <Tabs
        defaultActiveKey="1"
        size="large"

        centered={true}
        style={{ width: 1000, color: 'black' }}
      >
        <TabPane tab={t("planned projects")} key="1">
          <TabContentPlanned />
        </TabPane>
        <TabPane tab={t("Realized projects")} key="2">
          <TabContentRealized />
        </TabPane>
      </Tabs>
    </div>
  );
};
