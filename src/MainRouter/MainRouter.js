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

  /*constructor(props){
    super(props)

    this.abort = new AbortController();
  }

  componentWillUnmount(){
    this.abort.abort();
  }*/

  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/add-new">
              <MainFormPage />
            </Route>
            <Route path="/notepad">
              <Notepad />
            </Route>
            <Route path="/archive">
              <ArchivePage />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Link title="Notepad" className="button__notepad" to="/notepad">
          <EventNote>Notepad</EventNote>
        </Link>
      </Router>
    );
  }
}
