import React from 'react';
import './Settings.sass';
import Paper from '@material-ui/core/Paper';

class Settings extends React.Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <div className="settings">
        <div className="cBox">
          <h2 className="settings__title">Settings</h2>
          <Paper className="settings__box">
            TEST
          </Paper>
        </div>
      </div>
    )
  }
}

export default Settings;
