import React from 'react';
import headerLogoSvg from './logo.svg';
import './Header.sass';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="c-box">
          <img src={headerLogoSvg} className="header__logo" alt="Header-logo" />
          <div className="header__logo-label">React Info Board</div>
        </div>
      </div>
    )
  }
}