import React from 'react';
import './Settings.sass';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Api from '../../../Api';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      responsibleEmployee: '',
      labelWidth: 0,
    };

    this.inputLabel = React.createRef();
  }

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
  }

  handleSelectChange = event => {
    this.setState({ responsibleEmployee: event.target.value });
  };

  //TODO: save chosen user id to current user table
  render() {
    const users = this.state.users;
    console.log('SETTINGS usr', users);

    return (
      <div className="settings">
        <div className="cBox">
          <h2 className="settings__title">Settings</h2>
          <Paper className="settings__box">
            <div className="settings__responsible">
              <div className="settings__responsible-box">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel ref={this.inputLabel} id="outlined-label">
                    Responsible Employee
                  </InputLabel>
                  <Select
                    onChange={this.handleSelectChange}
                    value={this.state.responsibleEmployee}
                    labelId="outlined-label"
                    labelWidth={this.state.labelWidth}
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

              <div className="settings__responsible-button">
                  <Button disabled={!this.state.responsibleEmployee} size="large" type="submit" variant="contained" color="primary" fullWidth>
                      Save
                  </Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Settings;
