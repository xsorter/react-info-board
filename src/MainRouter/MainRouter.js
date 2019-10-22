import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterTest from '../RouterTest/RouterTest';
import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';
import HomePage from '../HomePage/HomePage';

export default class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Router>
        <Header />
        <MainMenu />
        <div>
          <Switch>
            <Route path="/code-snippets">
              <RouterTest data="to code-snippets" />
            </Route>
            <Route path="/general-info">
              <RouterTest data="to general-info" />
            </Route>
            <Route path="/warnings">
              <RouterTest data="to warnings" />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
