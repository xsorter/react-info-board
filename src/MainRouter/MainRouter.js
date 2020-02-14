import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/includes/Header/Header';
import Notepad from '../components/includes/Notepad/Notepad';
import HomePage from '../components/wrappers/HomePage/HomePage';
import ArchivePage from '../components/wrappers/ArchivePage/ArchivePage';
import MainFormPage from '../components/wrappers/MainFormPage/MainFormPage';
import Settings from '../components/includes/Settings/Settings';
import { EventNote } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/add-new" render={() => <MainFormPage isEditable={false}/>} />
            <Route path="/edit/:itemId" render={(props) => <MainFormPage isEditable={true} {...props}/>} />
            <Route path="/notepad" render={() => <Notepad />} />
            <Route path="/archive" render={() => <ArchivePage />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/" render={() => <HomePage />} />
          </Switch>
        </div>
        <Link title="Notepad" className="button__notepad" to="/notepad">
          <EventNote>Notepad</EventNote>
        </Link>
      </Router>
    );
  }
}
