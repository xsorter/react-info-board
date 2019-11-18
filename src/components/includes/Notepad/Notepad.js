import React, { Component } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Notepad.sass';

class Notepad extends Component {
  render() {
    return (
      <div className="notepad">
        <div className="cBox">
          <h2>Notepad</h2>
          <TextareaAutosize className="notepad__textarea" aria-label="minimum height" rows={3} placeholder="Minimum 3 rows" />
        </div>
      </div>
    );
  }
}

export default Notepad;
