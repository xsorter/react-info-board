import React from 'react';
import headerLogoPng from './logo.png';
import './Header.sass';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  return (
    <div className="Header">
      <div className="cBox">
        <div className="Header-col">
          <Link to="/" className="Header-logoLink">
            <img src={headerLogoPng} className="Header-logo" alt="Header-logo" />
            <div className="Header-logoLabel">Marketing Retro Board</div>
          </Link>
        </div>
        <div className="Header-col">
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
