import React from 'react';
import './Loading.sass';
import { ReactComponent as LoaderIcon } from './spinner.svg';

class Loading extends React.Component {
  render(){
    return(
      <div className="loading">
        <LoaderIcon />
      </div>
    )
  }
}

export default Loading;
