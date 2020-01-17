import React from 'react';
import './Loading.sass';
import { ReactComponent as LoaderIcon } from './loader.svg';

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
