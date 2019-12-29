import React from 'react';
import './Settings.sass';

class Settings extends React.Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <div className="settings">
        <div className="cBox">
          <h2 className="settings__title">Settings</h2>
        </div>
      </div>
    )
  }
}

export default Settings;
