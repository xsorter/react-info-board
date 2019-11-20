import React, { Component } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Notepad.sass';
import Button from '@material-ui/core/Button';

class Notepad extends Component {
  render() {
    return (
      <div className="notepad">
        <div className="cBox">
          <h2 className="notepad__title">Notepad</h2>
          <TextareaAutosize
            className="notepad__textarea"
            aria-label="minimum height"
            rows={3}
            placeholder="Type text here"
          />
          <div className="notepad__buttons">
            <Button variant="outlined" size="medium" color="primary">
              Save
            </Button>
            <Button variant="outlined" size="medium" color="secondary">
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Notepad;
