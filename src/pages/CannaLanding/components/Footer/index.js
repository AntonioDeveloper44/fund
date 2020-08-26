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
        <Divider type="vertical"></Divider>
        <div className="footer__subscribe-block">
          <p>SUBSCRIBE TO NEWSLETTER</p>
          <div className="s-input">
            <input type="email" placeholder="Email"></input>
            <Tooltip title="subscribe">
              <Button icon={<ArrowRightOutlined />}></Button>
            </Tooltip>
          </div>
          <p>© 2020 БО "Віра Надія Любов"</p>
        </div>
        <div className="footer__links">
          <div className="links-left">
            <a>PRIVACY POLICY</a>
            <a>TERMS OF USE </a>
            <a>RETURN POLICY</a>
          </div>

          <div className="links-right">
            <a>SHIPPING INFO</a>
            <a>RETURNS / EXCHANGES</a>
            <a>CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
};

