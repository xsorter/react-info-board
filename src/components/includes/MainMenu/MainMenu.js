import React, { Component } from 'react';
import './MainMenu.sass';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Warning, Dns, Code } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default class MainMenu extends Component {
  state = { tabIndex: false };
  handleChange = (event, newValue) => {
    this.setState({ tabIndex: newValue });
  };
  render() {
    return (
      <div className="MainMenu">
        <div className="cBox">
          <Tabs
            value={this.state.tabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab to="/warnings" icon={<Warning />} label="Warnings" component={Link} />
            <Tab to="/general-info" icon={<Dns />} label="General Info" component={Link} />
            <Tab to="/code-snippets" icon={<Code />} label="Code Snippets" component={Link} />
          </Tabs>
        </div>
      </div>
    );
  }
}
