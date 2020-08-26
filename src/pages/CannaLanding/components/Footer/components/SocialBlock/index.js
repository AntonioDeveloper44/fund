import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles
import './styles.scss';


export const SocialBlock = ({ links }) => {
  // Render

  return (
    <div className="social-block">
      {links.map(({ icon, link }, index) => {
        return (
          <a
            className="social-icon__wrapper"
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            key={index}
          >
            <ReactSVG className="social-icon__icon" src={icon} />
          </a>
        );
      })}
    </div>
  );
};
