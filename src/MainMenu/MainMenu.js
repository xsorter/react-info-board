import React, { useState } from 'react';
import './MainMenu.sass';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WarningIcon from '@material-ui/icons/Warning';
import DnsIcon from '@material-ui/icons/Dns';

export default function MainMenu() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="MainMenu">
      <div className="cBox">
        <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
          <Tab icon={<WarningIcon />} label="Warnings" />
          <Tab icon={<DnsIcon />} label="General Info" />
        </Tabs>
      </div>
    </div>
  );
}
