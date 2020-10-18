import React from 'react';
import { Link } from 'react-scroll';
import { history } from '../../../../../../index';
// Styles
import './styles.scss';
/////сomp
import { Button } from '../../../../../../components/Button';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Checkbox } from 'antd';

export const InfoBlock = () => {
  // Render
  const { t } = useTranslation();

  return (
    <div className={`info-block`}>
      <div className="info-block__span">
        <span>#Віра</span> <span>#Надія</span> <span>#Любов</span>
      </div>
      <p>Trust Hope Love</p>
      <p>{t('title')}</p>
      <a href="https://www.liqpay.ua/checkout/i59501288695">
        <Button size="lg" margin="true" marginTop>
          {t('heroButton')}
        </Button>
      </a>
      <div className="rules-box">
        <Checkbox defaultChecked={true} style={{ marginRight: 5 }} />
        <span
          style={{
            color: 'white',
            lineHeight: 1.5,
            fontSize: 16,
            letterSpacing: 2.2,
            marginRight: 5,
          }}
        >
          {t('heroRule1')}
        </span>
        <NavLink
          to="/rules"
          style={{ textDecoration: 'underline', fontSize: 16 }}
        >
          {t('heroRule2')}
        </NavLink>
      </div>

      <Link
        className="navbar__block-item"
        activeClass="navbar__block-item--active"
        to={'ourFund'}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        {t('heroLink')}
      </Link>
    </div>
  );
};
