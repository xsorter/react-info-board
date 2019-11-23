import React, { Component } from 'react';
import './Notepad.sass';
import Button from '@material-ui/core/Button';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Notepad extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  contentChangeHandler = editorState => {
    this.setState({
      editorState,
    });
  };
  saveHandler = () => {
    console.log('CURRENT CONTENT', convertToRaw(this.state.editorState.getCurrentContent()))
    console.log('SAVED');
  };
  clearHandler = () => {
    console.log('CLEAR');
  };
  render() {
    const { editorState } = this.state;
    return (
      <div className="notepad">
        <div className="cBox">
          <h2 className="notepad__title">Notepad</h2>
          <Editor
            editorState={editorState}
            toolbarClassName="notepad__toolbar"
            wrapperClassName="notepad__wrapper"
            editorClassName="notepad__textarea"
            onEditorStateChange={this.contentChangeHandler}
          />
          <div className="notepad__buttons">
            <Button onClick={this.saveHandler} variant="outlined" size="medium" color="primary">
              Save
            </Button>
            <Button onClick={this.clearHandler} variant="outlined" size="medium" color="secondary">
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Notepad;
