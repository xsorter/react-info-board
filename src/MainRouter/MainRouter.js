import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/includes/Header/Header';
import Notepad from '../components/includes/Notepad/Notepad';
import Archive from '../components/includes/Archive/Archive';
import HomePage from '../components/wrappers/HomePage/HomePage';
import RouterTest from '../components/wrappers/RouterTest/RouterTest';
import MainFormPage from '../components/wrappers/MainFormPage/MainFormPage';

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router>
        <Header />
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
            <Route path="/add-new">
              <MainFormPage />
            </Route>
            <Route path="/notepad">
              <Notepad />
            </Route>
            <Route path="/archive">
              <Archive />
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
