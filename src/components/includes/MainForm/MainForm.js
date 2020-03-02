import React, { Component } from 'react';
import './MainForm.sass';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Api from '../../../Api';
import helpers from '../../../Helpers';
import { Link } from 'react-router-dom';
import notyContainer from '../../hoc/Noty';

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
    currentId: this.props.isEditable ? this.props.match.params.itemId : '',
  };

  inputLabel = React.createRef();

  componentDidMount() {
    console.log(this.props);
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

    if(this.props.isEditable){
      this.populateEditedData();
    }
  }

  populateEditedData(){
    Api.getSingleItem(this.state.currentId)
      .then((data) => {
        console.log('DATA FOR EDIT', data.fields);
        console.log('DATA TITLE EDIT', data.fields.title.stringValue);
        this.setState({
          formTitle: data.fields.title.stringValue,
          formContent: data.fields.content.stringValue,
          responsibleEmployee: data.fields.content.stringValue
        })
      })
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
        id: { stringValue: uuid },
        timestampClient: { stringValue: helpers.getFullDate() },
        date: { stringValue: helpers.getShortDate() },
      }
    }

    Api.setData({
      edit: false,
      id: uuid,
      requestBody: request,
    })
    .then(resp => {
      if (resp.name) {
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
  }

  render() {
    const isEditable = this.props.isEditable;
    const users = this.state.users;
    console.log('STATE', this.state);

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

                {isEditable ? <div className={this.props.classes.inputRow}>EDITABLE TEST</div> : ''}

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
                        {/*TODO: Add condition*/}
                        <MenuItem value={this.state.responsibleEmployee}>-TEST-</MenuItem>

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

export default notyContainer(withStyles(useStyles)(MainForm));
