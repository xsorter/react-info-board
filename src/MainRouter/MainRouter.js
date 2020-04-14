import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/includes/Header/Header';
import Notepad from '../components/includes/Notepad/Notepad';
import HomePage from '../components/wrappers/HomePage/HomePage';
import ArchivePage from '../components/wrappers/ArchivePage/ArchivePage';
import MainFormPage from '../components/wrappers/MainFormPage/MainFormPage';
import Settings from '../components/includes/Settings/Settings';
import NotFound from '../components/etc/NotFound/NotFound';
import Login from '../components/wrappers/Authorisation/Login/Login';
import { EventNote } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class MainRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  PrivateRoute = ({ component: Children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          false ? (
            <Children {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };

  render() {
    return (
      <Router>
        <Header />
        <div className="wrapper__outer">
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <this.PrivateRoute
              path="/add-new"
              component={props => <MainFormPage isEditable={false} {...props} />}
            />
            <this.PrivateRoute
              path="/edit/:itemId"
              component={props => <MainFormPage isEditable={true} {...props} />}
            />
            <Route path="/notepad" component={() => <Notepad />} />
            <this.PrivateRoute path="/archive" render={() => <ArchivePage />} />
            <this.PrivateRoute path="/settings" render={() => <Settings />} />
            <Route path="/login" component={() => <Login />} />
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

export default MainRouter;
