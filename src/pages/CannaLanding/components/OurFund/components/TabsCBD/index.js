import React from 'react';

import { Tabs } from './../../../../../../components/Tabs';
import { TabsContent } from '../TabsCBD/components/TabsContent';
import { images } from './components/TabsContent/data';
import { imagesSecond } from './components/TabsContent/data'
import { imagesThird } from './components/TabsContent/data'

export const TabsCBD = () => {
  const tabLinks = [
    { name: 'contentBlock', label: 'Що є наш Фонд?' },
    { name: 'imageBlock', label: 'Кому ми допомагаємо?' },
    { name: 'justImage', label: 'Приєднуйся до нас!' },
  ];

  const tabContent = [
    {
      content: () => <TabsContent title="title" text1="text1" text2="text2" text3="text3" images={images} />,
      name: 'contentBlock',
    },
    {
      content: () => <TabsContent title="title2" text1="text4" text2="text5" text3="text6" images={imagesSecond} />,

      name: 'imageBlock',
    },
    {
      content: () => (

        <TabsContent title="title2" text1="text7" text2="text8" text3="text9" images={imagesThird} />
      ),
      name: 'justImage',
    },
  ];

  return (
    <div className="tabs-wrapper">
      <Tabs tabLinks={tabLinks} tabContent={tabContent} />
    </div>
  );
};
