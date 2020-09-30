import React from 'react';
import { Link } from 'react-scroll';
import { history } from '../../../../../../index';
// Styles
import './styles.scss';
/////сomp
import { Button } from '../../../../../../components/Button';
import { useTranslation } from 'react-i18next';

export const InfoBlock = () => {
  // Render
  const { t } = useTranslation();


  return (
    <div className={`info-block`}>

        <div className="info-block__span">
          <span>#Віра</span> <span>#Надія</span> <span>#Любов</span>
        </div>
        <p>Trust Hope Love</p>
        <p>
          {t('title')}
        </p>
        <Button size="lg" margin="true" marginTop onClick={() => history.push('/help')}>
          {t('heroButton')}
        </Button>
        <Link
          className="navbar__block-item"
          activeClass="navbar__block-item--active"
          to={"ourFund"}
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
