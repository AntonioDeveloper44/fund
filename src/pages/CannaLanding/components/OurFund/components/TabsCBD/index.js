import React from 'react';

import { Tabs } from '../../../../../../components/Tabs';
import { TabsContent } from './components/TabsContent';
import { images } from './components/TabsContent/data';
import { imagesSecond } from './components/TabsContent/data';
import { imagesThird } from './components/TabsContent/data';
import { useTranslation } from 'react-i18next';

export const TabsCBD = () => {
  const { t } = useTranslation();

  const tabLinks = [
    { name: 'contentBlock', label: t('tabsTitle1') },
    { name: 'imageBlock', label: t('tabsTitle2') },
    { name: 'justImage', label: t('tabsTitle3') },
  ];

  const tabContent = [
    {
      content: () => (
        <TabsContent
          text1={t('tabsContent1text1')}
          text2={t('tabsContent1text2')}
          text3={t('tabsContent1text3')}
          images={images}
        />
      ),
      name: 'contentBlock',
    },
    {
      content: () => (
        <TabsContent
          text1={t('tabsContent2text1')}
          text3={t('tabsContent2text2')}
          text2={t('tabsContent2text3')}
          images={imagesSecond}
        />
      ),

      name: 'imageBlock',
    },
    {
      content: () => (
        <TabsContent
          title={t('tabsContent3text3')}
          text1={t('tabsContent3text4')}
          text2={t('tabsContent3text5')}
          text3={t('tabsContent3text6')}
          images={imagesThird}
        />
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
