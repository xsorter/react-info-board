//TODO: recfactor component
import React, { Component } from 'react';
import './MainForm.sass';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Switch } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Api from '../../../Api';
import helpers from '../../../Helpers';
import { Link } from 'react-router-dom';
import notyContainer from '../../hoc/Noty';
import { withRouter } from 'react-router-dom';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(4),
    position: 'relative',
  },
  inputRow: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  inputRowFlex: {
    margin: theme.spacing(2, 0, 0, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputRowFlexLeft: {
    flex: '1 1 auto',
    paddingRight: 8,
  },
  inputRowFlexRight: {
    flex: '1 0 auto',
    maxWidth: 200,
    paddingLeft: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class MainForm extends Component {
  state = {
    users: [],
    labelWidth: 0,
    formTitle: '',
    formContent: '',
    responsibleEmployee: '',
    /*isEditable: this.props.location.pathname !== '/add-new' ? true : false,*/
    isEditable: this.props.isEditable ? true : false,
    currentId: this.props.isEditable ? this.props.match.params.itemId : '',
    statusClosed: false,
  };

  inputLabel = React.createRef();

  componentDidMount() {
    console.log('prop', this.props);

    Api.getUsers().then(users => {
      const items = [];
      users.documents.map(e => {
        items.push(e.fields);
        return null;
      });

      this.setState({
        users: items,
      });
    });

    this.setState({
      labelWidth: this.inputLabel.current.offsetWidth,
    });

    this.populateEditedData();
  }

  /*componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/add-new') {
      console.log(nextProps.location.pathname);
      this.setState({
        isEditable: false,
      });
    } else {
      this.setState({
        isEditable: true,
      });
      this.populateEditedData();
    }
    console.log('EDITABLEST', this.state.isEditable);
  }*/

  populateEditedData() {
    if (this.state.isEditable) {
      Api.getSingleItem(this.state.currentId).then(data => {
        this.setState({
          formTitle: data.fields.title.stringValue,
          formContent: data.fields.content.stringValue,
          responsibleEmployee: data.fields.author.stringValue,
        });
      });
    }
  }

  handleStatusChange = event => {
    this.setState({ statusClosed: event.target.checked });
  };

  handleContentChange = event => {
    this.setState({ formContent: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ formTitle: event.target.value });
  };

  handleSelectChange = event => {
    this.setState({ responsibleEmployee: event.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const uuid = helpers.idGenerator();
    const target = e.currentTarget;
    const request = {
      fields: {
        title: { stringValue: this.state.formTitle },
        content: { stringValue: this.state.formContent },
        status: { stringValue: 'opened' },
        deletionSubmit: { booleanValue: false },
        author: { stringValue: this.state.responsibleEmployee },
        id: { stringValue: this.state.isEditable ? this.state.currentId : uuid },
        timestampClient: { stringValue: helpers.getFullDate() },
        date: { stringValue: helpers.getShortDate() },
      },
    };

    Api.setData({
      edit: this.state.isEditable,
      id: uuid,
      requestBody: request,
    }).then(resp => {
      if (resp.name) {
        this.setState({
          formTitle: '',
          formContent: '',
          responsibleEmployee: '',
        });
        target.reset();
        const notyMessage = {
          type: 'success',
          show: true,
          message: 'Record added!',
        };
        this.props.onMessageFired(notyMessage);
      }
    });
  };

  componentWillUnmount() {
    //TODO: clear subscribtion
    console.log('unmount');
  }

  render() {
    console.log('prop', this.props);
    const isEditable = this.state.isEditable;
    const users = this.state.users;

    return (
      <div className="InfoList">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h5" component="h5">
              {isEditable ? (
                <span title={this.state.currentId}>
                  Edit Item: {this.state.currentId.substring(1, 7)}...
                </span>
              ) : (
                'Add New Issue'
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.props.classes.root}>
              <Typography variant="caption" display="block" gutterBottom>
                Here you can add a new issue for current retrospective meeting.
                <br />
                Later you may find it at <Link to="/archive">archive</Link> section for a
                corresponding date.
              </Typography>
              <form onSubmit={this.submitHandler} noValidate autoComplete="off">
                <div className={this.props.classes.inputRow}>
                  <TextField
                    id="outlined-basic"
                    label="Issue Subject"
                    variant="outlined"
                    onChange={this.handleTitleChange}
                    value={this.state.formTitle}
                    fullWidth
                  />
                </div>
                <div className={this.props.classes.inputRow}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Issue Description"
                    multiline
                    rows="4"
                    variant="outlined"
                    value={this.state.formContent}
                    onChange={this.handleContentChange}
                    fullWidth
                  />
                </div>

                {isEditable ? (
                  <div className={this.props.classes.inputRow}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.statusClosed}
                          onChange={this.handleStatusChange}
                          value={this.state.statusClosed}
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      }
                      label={this.state.statusClosed ? 'Status: closed' : 'Status: opened'}
                    />
                  </div>
                ) : (
                  ''
                )}

                <div className={this.props.classes.inputRowFlex}>
                  <div className={this.props.classes.inputRowFlexLeft}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel ref={this.inputLabel} id="demo-simple-select-outlined-label">
                        Responsible Employee
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        labelWidth={this.state.labelWidth}
                        onChange={this.handleSelectChange}
                        value={this.state.responsibleEmployee}
                      >
                        {users.map((e, i) => {
                          return (
                            <MenuItem key={i} value={e.shortName.stringValue}>
                              {e.fullName.stringValue}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>
                  <div className={this.props.classes.inputRowFlexRight}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(notyContainer(withStyles(useStyles)(MainForm)));
