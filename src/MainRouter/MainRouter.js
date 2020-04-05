import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/includes/Header/Header';
import Notepad from '../components/includes/Notepad/Notepad';
import HomePage from '../components/wrappers/HomePage/HomePage';
import ArchivePage from '../components/wrappers/ArchivePage/ArchivePage';
import MainFormPage from '../components/wrappers/MainFormPage/MainFormPage';
import Settings from '../components/includes/Settings/Settings';
import NotFound from '../components/etc/NotFound/NotFound';
import { EventNote } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="wrapper__outer">
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              path="/add-new"
              render={props => <MainFormPage isEditable={false} {...props} />}
            />
            <Route
              path="/edit/:itemId"
              render={props => <MainFormPage isEditable={true} {...props} />}
            />
            <Route path="/notepad" render={() => <Notepad />} />
            <Route path="/archive" render={() => <ArchivePage />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/404" render={() => <NotFound />} />
            <Redirect to="/404" />
          </Switch>
        </div>
        <Link title="Notepad" className="button__notepad" to="/notepad">
          <EventNote>Notepad</EventNote>
        </Link>
      </Router>
    );
  }
}
