import React from 'react';
import './ResponsiblePerson.sass';
import Api from '../../../Api';
import notyContainer from '../../hoc/Noty';
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
    return (
      <Paper className={'ResponsiblePerson ' + this.props.classes.root}>
        <Avatar alt="Remy Sharp" className={this.props.classes.avatar} src={AvatarImage} />
        <Typography variant="h6">Galyna Golovnia</Typography>
        <Typography color="textSecondary" variant="caption" display="block" gutterBottom>
          Current week retro master
        </Typography>
        <div>
          <Typography variant="overline" display="inline" gutterBottom>
            User ID:&nbsp;
          </Typography>
          <Typography variant="subtitle2" display="inline" gutterBottom>
            {name}
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default notyContainer(withStyles(useStyles)(ResponsiblePerson));
