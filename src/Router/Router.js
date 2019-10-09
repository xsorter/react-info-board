import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import MainMenu from '../MainMenu/MainMenu';

export default class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Router>
        <MainMenu></MainMenu>
        <div>
          <Switch>
            <Route path="/code-snippets">
              <Home data="to code-snippets" />
            </Route>
            <Route path="/general-info">
              <Home data="to general-info" />
            </Route>
            <Route path="/warnings">
              <Home data="to warnings" />
            </Route>
            <Route path="/">
              <Home data="to home" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
