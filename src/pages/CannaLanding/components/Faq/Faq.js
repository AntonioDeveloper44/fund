import React from 'react';
import Collapsible from 'react-collapsible';
import './styles.scss'
import { TitleBlock } from '../../../../components/TitleBlock';
import bankImg from './../../../../assets/images/bankImg.jpg'
import {useTranslation} from "react-i18next";

export const Faq = () => {
    const {t} = useTranslation()
  return(
    <div className="faq">
      <TitleBlock title="FAQ" subtitle="ЧАСТІ ЗАПИТАННЯ" description={t("faqTitle")} />
      <Collapsible open={true} trigger={t("faq1")}>
        <p>
            {t("faq2")}
        </p>
        <p>
            {t("faq3")}
        </p>
      </Collapsible>
      <Collapsible trigger={t("faq4")}>
        <p>
            {t("faq5")}
        </p>
      </Collapsible>
      <Collapsible trigger={t("faq7")}>
        <p>
            {t("faq6")}
        </p>
      </Collapsible>
      <Collapsible trigger={t("faq8")}>
        <p>
            {t("faq9")}
        </p>
      </Collapsible>
      <Collapsible trigger={t("faq10")}>
        <img src={bankImg} alt='bank'/>
      </Collapsible>

    </div>
  )
}