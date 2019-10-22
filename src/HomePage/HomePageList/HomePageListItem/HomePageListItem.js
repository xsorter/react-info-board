import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '0.15rem',
  },
  content: {
    fontSize: '0.9rem',
  },
}));

const HomePageListItem = props => {
  const classes = useStyles();
  return (
    <Grid item xs={12} /*onClick={() => this.deleteWarning(index)} key={warning.id}*/>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="h6" component="h6">
          {props.title}
        </Typography>
        <Typography className={classes.content} component="p">
          {props.content}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default HomePageListItem;
