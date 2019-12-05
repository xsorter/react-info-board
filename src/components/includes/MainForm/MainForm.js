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
  constructor(props) {
    super(props);
    this.state = {
      labelWidth: 0,
      responsibleEmployee: '',
    };
    this.inputLabel = React.createRef();
    this.handleSelectChange = event => {
      this.setState({ responsibleEmployee: event.target.value });
    };
  }

  componentDidMount() {
    this.setState({ labelWidth: this.inputLabel.current.offsetWidth });
  }

  render() {
    return (
      <div className="InfoList">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h5" component="h5">
              Add New Issue
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.props.classes.root}>
              <Typography variant="caption" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasi quidem
                quibusdam.
                <br />
                Quos blanditiis cupiditate numquam fugiat deleniti?
              </Typography>
              <form noValidate autoComplete="off">
                <div className={this.props.classes.inputRow}>
                  <TextField
                    id="outlined-basic"
                    label="Issue Subject"
                    variant="outlined"
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
                    fullWidth
                  />
                </div>
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
                        <MenuItem value="Roman Mekhed">Roman Mekhed</MenuItem>
                        <MenuItem value="Oleksii Nelin">Oleksii Nelin</MenuItem>
                        <MenuItem value="Galyna Golovnia">Galyna Golovnia</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={this.props.classes.inputRowFlexRight}>
                    <Button variant="contained" color="primary" fullWidth>
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

export default withStyles(useStyles)(MainForm);
