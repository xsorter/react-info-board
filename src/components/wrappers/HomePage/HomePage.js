import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InfoList from '../../includes/InfoList/InfoList';
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
    Api.getData().then(data => {
      const items = [];
      data.documents.map(e => {
        items.push(e.fields);
        return null;
      });
      items.splice(4);
      updateList(items);
    });
  }, []);

  return (
    <div className="HomePage">
      <div className="cBox">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Future form ;)
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <InfoList dataArr={homePageInfoList} />
            </Grid>
          </Grid>
        </div>
      </div>
      <Link class="button__notepad" to="/notepad">Notepad</Link>
    </div>
  );
};

export default HomePage;
