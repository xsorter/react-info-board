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
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {}
  }

  componentDidMount(){
    this.setState({
      ...this.props
    })
  }

  render() {
    console.log('STATE',this.state);
    return (
      <div className="Archive">
        <Paper className="Archive__paper">
          <Typography variant="h6" gutterBottom>
            xx
          </Typography>
          <div className="Archive__item">
            <Typography component="div" color="inherit" variant="body2">
              <Typography variant="subtitle1" display="inline" color="primary">
                #001&nbsp;
              </Typography>
              <Typography variant="overline" display="inline" color="textSecondary">
                Mekhed Roman:&nbsp;
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
          <div className="Archive__item Archive__item_incomplete">
            <Typography component="div" variant="body2">
              <Typography variant="subtitle1" display="inline" color="primary">
                #002&nbsp;
              </Typography>
              <Typography variant="overline" display="inline" color="textSecondary">
                Mekhed Roman:&nbsp;
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
          <div className="Archive__item">
            <Typography component="div" variant="body2">
              <Typography variant="subtitle1" display="inline" color="primary">
                #003&nbsp;
              </Typography>
              <Typography variant="overline" display="inline" color="textSecondary">
                Mekhed Roman:&nbsp;
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Archive);
