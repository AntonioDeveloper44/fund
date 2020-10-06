import React from 'react';
import { HeaderSimulator } from '../../components/HeaderSimulator/HeaderSimulator';

import './styles.scss'
import {Redirect} from "react-router-dom";


export const Payment = () => {
  return (
    <>
      <HeaderSimulator />
      <div className="payment">
      Payment Page :)
          <a href='https://www.liqpay.ua/checkout/i59501288695'>допомогти</a>
      </div>
      </>
  )
}