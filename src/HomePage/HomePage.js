import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HomePageList from './HomePageList/HomePageList';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
}));

const HomePage = () => {
  const classes = useStyles();
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
              <HomePageList />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
