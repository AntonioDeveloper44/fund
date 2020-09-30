import React, { Suspense } from 'react';

// Styles
import './styles/fonts.scss';
import './styles/index.scss';

// Containers


import { Landing } from './pages/CannaLanding';
import { Spin } from 'antd';

export const App = () => {

  return (
    <Suspense fallback={<Spin />}>
      <Landing />
    </Suspense>

);

};


