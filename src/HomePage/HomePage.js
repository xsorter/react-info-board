import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InfoList from '../InfoList/InfoList';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const homePageInfoList = [
    {
      id: 'unid-0',
      title: 'Title-0',
      content: 'Content-0 Content-0 Content-0 Content-0',
    },
    {
      id: 'unid-1',
      title: 'Title-1',
      content: 'Content-1 Content-1 Content-1 Content-1',
    },
    {
      id: 'unid-2',
      title: 'Title-2',
      content: 'Content-2 Content-2 Content-2 Content-2',
    },
  ];
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
    </div>
  );
};

export default HomePage;
