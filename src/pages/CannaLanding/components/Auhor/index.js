import React from 'react';
import { Tabs } from 'antd';

//Styles
import './styles.scss';
import { TabContentPlanned } from './tabsContent/TabContentPlanned';
import { TabContentRealized } from './tabsContent/TabContentRealized';

//----------------------
const { TabPane } = Tabs;
export const Author = () => {
  //Render
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="author-block" id="author">
      <Tabs
        defaultActiveKey="1"
        size="large"
        onChange={callback}
        centered={true}
        style={{ width: 1000, color: 'black' }}
      >
        <TabPane tab="Заплановані проекти" key="1">
          <TabContentPlanned />
        </TabPane>
        <TabPane tab="Реалізовані проекти" key="2">
          <TabContentRealized />
        </TabPane>
      </Tabs>
    </div>
  );
};
