import React from 'react';
import './Settings.sass';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class Settings extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      labelWidth: 0,
    };

    this.inputLabel = React.createRef();

  }

  componentDidMount() {
    this.setState({
      labelWidth: this.inputLabel.current.offsetWidth,
    });
  }


  render(){
    return(
      <div className="settings">
        <div className="cBox">
          <h2 className="settings__title">Settings</h2>
          <Paper className="settings__box">
            <div className="settings__responsible">
            <FormControl variant="outlined" fullWidth>
              <InputLabel ref={this.inputLabel} id="outlined-label">
                Responsible Employee
              </InputLabel>
              <Select
                labelId="outlined-label"
                labelWidth={this.state.labelWidth}
                value=""
              >
                <MenuItem value="">
                  Mekhed
                </MenuItem>
              </Select>
            </FormControl>
            </div> 
          </Paper>
        </div>
      </div>
    )
  }
}

export default Settings;
