import React from 'react';
import headerLogoPng from './logo.png';
import './Header.sass';
import { Link } from 'react-router-dom';

const header = () => (
  <div className="Header">
    <div className="cBox">
      <div className="Header-col">
        <Link to="/" className="Header-logoLink">
          <img src={headerLogoPng} className="Header-logo" alt="Header-logo" />
          <div className="Header-logoLabel">Marketing Retro Board</div>
        </Link>
      </div>
      <div className="Header-col"></div>
    </div>
  </div>
);

export default header;
