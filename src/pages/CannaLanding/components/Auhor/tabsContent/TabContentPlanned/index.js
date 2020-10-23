import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import './styles.scss';
import {useTranslation} from "react-i18next";

export const TabContentPlanned = () => {
    const {t} = useTranslation()

  return (
    <div className="planned-tab">
      <div className="planned-tab__title">{t("НДСЛ")}</div>
      <p>{t("what")}</p>
      <p>
          {t("what1")}
      </p>
      <p>
        <CheckOutlined /> {t("what2")}
      </p>

      <p>
        <CheckOutlined />{t("what3")}
      </p>
      <p>
        <CheckOutlined /> {t("what4")}
      </p>
      <div className="planned-tab__cost">
          {t("zcost")}
      </div>

      <div className="planned-tab__title">
          {t("reabilitation")}
      </div>
      <p>{t("whatplan")}</p>
      <p>
        <CheckOutlined /> {t("whatplan2")}
        <a href="http://www.rehab.uzhgorod.ua/" style={{ color: 'red' }}>
          http://www.rehab.uzhgorod.ua/
        </a>
      </p>
      <div className="planned-tab__cost">
          {t("whatplan3")}
      </div>
    </div>
  );
};
