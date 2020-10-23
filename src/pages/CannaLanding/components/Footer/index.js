import React, {useState} from 'react';
import  { Modal, Divider } from 'antd';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SocialBlock } from './components/SocialBlock';
import { socialLinks } from './data';

// Styles

import './styles.scss';
import {useTranslation} from "react-i18next";



export const Footer = () =>  {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation()

    return (
      <div className="footer" id="footer">
        <div className="footer__content">
          <Modal
            title="Basic Modal"
            visible={visible}
            footer={[
              <Button key="back" onClick={() => setVisible(false)}>
                Відмінити
              </Button>,
              <Button key="submit" type="primary"n onClick={() => setVisible(false)}>
                Добре
              </Button>
            ]}
          >
            <p>Дякуємо за підписку...</p>

          </Modal>


          <Divider>{t("foo1")}</Divider>
          <div className="footer__social-block">
            <SocialBlock links={socialLinks} />
          </div>
          <Divider type="vertical" />
          <div className="footer__subscribe-block">
            <p>{t("foo2")}</p>
            <div className="s-input">
              <input type="email" placeholder="Email" />
              <Tooltip title="subscribe">
                <Button onClick={ () => setVisible(true) } icon={<ArrowRightOutlined />} />
              </Tooltip>
            </div>
            <p>© 2020 БО "Віра Надія Любов"</p>
          </div>
          <div className="footer__links">
            <div className="links-left">
              <p>ДОПОМАГАЙ</p>
              <p>РЯТУЙ</p>
              <p>ПІКЛУЙСЯ</p>
            </div>

            <div className="links-right">
              <p>ВІРА</p>
              <p>НАДІЯ</p>
              <p>ЛЮБОВ</p>
            </div>
          </div>
        </div>
      </div>
    )
};

