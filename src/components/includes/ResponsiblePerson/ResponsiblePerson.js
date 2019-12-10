import React from 'react';
import './ResponsiblePerson.sass';
import Api from '../../../Api';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarImage from './avatar.jpg';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(2),
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    margin: theme.spacing(1) + 'px auto',
    boxShadow: '0 0 0 2px ' + theme.palette.primary.main,
    border: '2px solid ' + theme.palette.common.white,
  },
});

const slackDomain = "blackrockmarketing.slack.com/team"

class ResponsiblePerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Api.getUsers().then(users => {
      const items = [];
      users.documents.map(user => {
        if (user.fields.isResponsible.booleanValue) {
          items.push(user.fields);
        }
        return null;
      });
      this.setState(items[0]);
    });
  }

  render() {
    const name = this.state.shortName ? this.state.shortName.stringValue : 'loading...';
    const fullName = this.state.fullName ? this.state.fullName.stringValue: 'loading...';
    const slackId = this.state.slackId ? this.state.slackId.stringValue : 'U9M190S4X';
    return (
      <Paper className={'ResponsiblePerson ' + this.props.classes.root}>
        <Avatar alt="Remy Sharp" className={this.props.classes.avatar} src={AvatarImage} />
        <Typography variant="h6">{fullName}</Typography>
        <Typography color="textSecondary" variant="caption" display="block" gutterBottom>
          Current week retro master
        </Typography>
        <div>
          <Typography variant="overline" display="inline" gutterBottom>
            User ID:&nbsp;
          </Typography>
          <Typography variant="subtitle2" display="inline" gutterBottom>
            <a href={`https://${slackDomain}/${slackId}`} rel="noopener noreferrer" target="_blank">
              {name}
            </a>
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(ResponsiblePerson);
