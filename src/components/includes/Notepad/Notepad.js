import React, { Component } from 'react';
import './Notepad.sass';
import Button from '@material-ui/core/Button';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw } from 'draft-js';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import notyContainer from '../../hoc/Noty';

const nullContent = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

class Notepad extends Component {
  constructor(props) {
    super(props);
    const currentContent = localStorage.getItem('notepadContent')
      ? JSON.parse(localStorage.getItem('notepadContent'))
      : nullContent;
    this.state = {
      contentState: currentContent,
      editorState: EditorState.createWithContent(convertFromRaw(currentContent)),
    };
  }

  contentChangeHandler = editorState => {
    this.setState({
      editorState,
    });
  };

  saveHandler = () => {
    localStorage.setItem(
      'notepadContent',
      JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())),
    );

    if (localStorage.getItem('notepadContent')) {
      const notyMessage = {
        type: 'success',
        show: true,
        message: 'Message successfully added!',
      };
      this.props.onMessageFired(notyMessage);
    }
  };

  clearHandler = () => {
    const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="notepad">
        <div className="cBox">
          <h2 className="notepad__title">Notepad</h2>
          <Editor
            initialContentState={editorState.contentState}
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

export default notyContainer(Notepad);
