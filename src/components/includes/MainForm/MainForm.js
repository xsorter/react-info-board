//TODO: recfactor component
import React, { Component } from 'react';
import './MainForm.sass';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
import notyContainer from '../../hoc/Noty';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
  inputRowFlexRight_half: {
    maxWidth: '50%'
  }
});

class MainForm extends Component {
  state = {
    users: [],
    labelWidth: 0,
    formTitle: '',
    formContent: '',
    responsibleEmployee: '',
    isEditable: this.props.isEditable ? true : false,
    isLoaded: false,
    currentId: this.props.isEditable ? this.props.match.params.itemId : '',
    statusClosed: false,
    taskNumber: ''
  };

  inputLabel = React.createRef();

  componentDidMount() {
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

    if(this.state.isEditable){
      this.populateEditedData(this.state.currentId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isEditable: nextProps.isEditable
      });
      if(nextProps.location.pathname === '/add-new'){
        this.setState({
          formTitle: '',
          formContent: '',
          responsibleEmployee: '',
          taskNumber: '',
          statusClosed: false
        });
      } else {
        this.setState({
          currentId: nextProps.match.params.itemId
        })
        this.populateEditedData(nextProps.match.params.itemId)
      }
      console.log('PROP', nextProps)
    }
  }

  populateEditedData(id) {
    Api.getSingleItem(id)
    .then(data => {
      this.setState({
        formTitle: data.fields.title.stringValue,
        formContent: data.fields.content.stringValue,
        responsibleEmployee: data.fields.author.stringValue,
        statusClosed: data.fields.status.stringValue === 'opened' ? false : true,
      });
      if(data.fields.task){
        this.setState({
          taskNumber: data.fields.task.stringValue
        })
      }
    })
    .catch(err => {
      console.log('ERR', err)
    });
  }

  handleStatusChange = event => {
    this.setState({ statusClosed: event.target.checked });
  };

  handleContentChange = event => {
    this.setState({ formContent: event.target.value });
  };

  handleTaskChange = event => {
    this.setState({ taskNumber: event.target.value });
  };

  handleTitleChange = event => {
    this.setState({ formTitle: event.target.value });
    console.log('ID', this.state);
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
        status: { stringValue: this.state.statusClosed ? 'closed' : 'opened' },
        deletionSubmit: { booleanValue: false },
        author: { stringValue: this.state.responsibleEmployee },
        id: { stringValue: this.state.isEditable ? this.state.currentId : uuid },
        timestampClient: { stringValue: helpers.getFullDate() },
        date: { stringValue: helpers.getShortDate() },
        task: { stringValue: this.state.isEditable ? this.state.taskNumber : false }
      },
    };

    Api.setData({
      edit: this.state.isEditable,
      id: this.state.isEditable ? this.state.currentId : uuid,
      requestBody: request,
    })
    .then(resp => {
      if (resp.name) {
        this.setState({
          formTitle: '',
          formContent: '',
          responsibleEmployee: '',
          taskNumber: ''
        });
        target.reset();
        const notyMessage = {
          type: 'success',
          show: true,
          message: this.state.isEditable ? 'Updated successfully!' : 'Record added!' ,
        };
        this.props.onMessageFired(notyMessage);
      }
    });
  };

  componentWillUnmount() {
    //TODO: clear subscribtion
  }

  render() {
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
              {!isEditable ?
                <Typography variant="caption" display="block" gutterBottom>
                  Here you can add a new issue for current retrospective meeting.
                  <br />
                  Later you may find it at <Link to="/archive">archive</Link> section for a
                  corresponding date.
                </Typography>
              : ''}

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

                {isEditable ?
                  <React.Fragment>
                    <div className={this.props.classes.inputRowFlex}>

                      <div className={this.props.classes.inputRowFlexLeft}>
                          <TextField
                            id="outlined-basic"
                            label="Corresponding task"
                            variant="outlined"
                            onChange={this.handleTaskChange}
                            value={this.state.taskNumber}
                            fullWidth
                          />
                      </div>
                      <div className={this.props.classes.inputRowFlexRight}>
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
                    </div>
                  </React.Fragment>
                 : ''}

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
