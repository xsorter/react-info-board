import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    position: 'relative',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '0.15rem',
  },
  content: {
    fontSize: '0.9rem',
  },
  close: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    fontSize: '1.2678rem',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  textInput: {
    boxShadow: theme.shadows[1],
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(0.5),
  },
}));
const InfoListItem = props => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <CloseIcon onClick={props.click} className={classes.close} />
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

export default InfoListItem;
