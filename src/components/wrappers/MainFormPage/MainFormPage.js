import React from 'react';
import './MainFormPage.sass';
import ResponsiblePerson from '../../includes/ResponsiblePerson/ResponsiblePerson';
import MainForm from '../../includes/MainForm/MainForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { EventNote } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
}));

const HomePage = props => {
  const classes = useStyles();
  console.log(props.params);

  return (
    <div className="HomePage">
      <div className="cBox">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <ResponsiblePerson />
            </Grid>
            <Grid item xs={9}>
              <MainForm {...props} />
            </Grid>
          </Grid>
        </div>
      </div>
      <Link title="Notepad" className="button__notepad" to="/notepad">
        <EventNote>Notepad</EventNote>
      </Link>
    </div>
  );
};

export default HomePage;
