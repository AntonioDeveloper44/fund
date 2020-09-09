import React from 'react';
import { Divider } from 'antd';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SocialBlock } from './components/SocialBlock';
import { socialLinks } from './data';

// Styles

import './styles.scss';


export const Footer = props => {

  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <Divider> Віра Надія Любов</Divider>
        <div className="footer__social-block">
          <SocialBlock links={socialLinks} />
        </div>
        <Divider type="vertical" />
        <div className="footer__subscribe-block">
          <p>SUBSCRIBE TO NEWSLETTER</p>
          <div className="s-input">
            <input type="email" placeholder="Email" />
            <Tooltip title="subscribe">
              <Button icon={<ArrowRightOutlined />} />
            </Tooltip>
          </div>
          <p>© 2020 БО "Віра Надія Любов"</p>
        </div>
        <div className="footer__links">
          <div className="links-left">
            <p>PRIVACY POLICY</p>
            <p>TERMS OF USE </p>
            <p>RETURN POLICY</p>
          </div>

          <div className="links-right">
            <p>SHIPPING INFO</p>
            <p>RETURNS / EXCHANGES</p>
            <p>CONTACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

