import React from 'react';
// Pages
import { Landing } from '../../pages/CannaLanding';

// --------------------

export const Routes = () => {
  return (
    <>
    <Landing />
    {/*<Payment />*/} {/*тут будет отдельная страничка для оплаты, но можно тулить и в Landing (я перенесу по надобности) */}
    </>
    );
};
