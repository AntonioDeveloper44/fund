import React from 'react';
import  { Modal, Divider } from 'antd';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SocialBlock } from './components/SocialBlock';
import { socialLinks } from './data';

// Styles

import './styles.scss';



export class Footer extends React.Component  {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer__content">
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Відмінити
              </Button>,
              <Button key="submit" type="primary" onClick={this.handleOk}>
                Добре
              </Button>,
            ]}
          >
            <p>Дякуємо за підписку...</p>

          </Modal>


          <Divider> Віра Надія Любов</Divider>
          <div className="footer__social-block">
            <SocialBlock links={socialLinks} />
          </div>
          <Divider type="vertical" />
          <div className="footer__subscribe-block">
            <p>Підписка на новини</p>
            <div className="s-input">
              <input type="email" placeholder="Email" />
              <Tooltip title="subscribe">
                <Button onClick={this.showModal} icon={<ArrowRightOutlined />} />
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
  }

};

