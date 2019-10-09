import React, { useState } from 'react';
import './MainMenu.sass';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Warning, Dns, Code } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="MainMenu">
      <div className="cBox">
        <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
          <Tab to="/warnings" icon={<Warning />} label="Warnings" component={Link} />
          <Tab to="/general-info" icon={<Dns />} label="General Info" component={Link} />
          <Tab to="/code-snippets" icon={<Code />} label="Code Snippets" component={Link} />
        </Tabs>
      </div>
    </div>
  );
}
