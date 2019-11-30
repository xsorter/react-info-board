import React, { useState, useEffect } from 'react';
import './HomePage.sass';
import ResponsiblePerson from '../../includes/ResponsiblePerson/ResponsiblePerson';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InfoList from '../../includes/InfoList/InfoList';
import { EventNote } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Api from '../../../Api';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
}));

const HomePage = props => {
  const classes = useStyles();
  const [homePageInfoList, updateList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    Api.getData().then(data => {
      const items = [];
      data.documents.map(e => {
        items.push(e.fields);
        return null;
      });
      items.splice(4);
      updateList(items);
    });

    //for promise unsubscribe before unmount component
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div className="HomePage">
      <div className="cBox">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <ResponsiblePerson />
            </Grid>
            <Grid item xs={9}>
              <InfoList dataArr={homePageInfoList} />
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
