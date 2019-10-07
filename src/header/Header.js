import React from 'react';
import headerLogoSvg from './logo.svg';
import './Header.sass';
import Button from '@material-ui/core/Button';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

const header = () => (
  <div className="Header">
    <div className="cBox">
      <div className="Header-col">
        <img src={headerLogoSvg} className="Header-logo" alt="Header-logo" />
        <div className="Header-logoLabel">React Info Board</div>
      </div>
      <div className="Header-col">
        <Button variant="contained" color="secondary">
          <DynamicFeedIcon></DynamicFeedIcon>
          <span>Archive</span>
        </Button>
      </div>
    </div>
  </div>
);

export default header;
