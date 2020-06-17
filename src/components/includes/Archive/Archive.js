import React from 'react';
import './Archive.sass';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
  },
});

class Archive extends React.Component {
  render() {
    const date = this.props.items.date;
    const items = this.props.items.itemsData;

    return (
      <div className="Archive">
        <Paper className="Archive__paper">
          <Typography variant="h6" gutterBottom>
            {date}
          </Typography>
          {items.map((e, i) => {
            return (
              <div
                key={i}
                className={
                  e.status === 'opened'
                    ? 'Archive__item '
                    : 'Archive__item Archive__item_incomplete '
                }
              >
                <Typography component="div" color="inherit" variant="body2">
                  <Typography
                    title={`id: ${e.id}`}
                    variant="overline"
                    display="inline"
                    color="textSecondary"
                  >
                    {e.author} :&nbsp;
                  </Typography>
                  {e.text}
                </Typography>
              </div>
            );
          })}
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Archive);
