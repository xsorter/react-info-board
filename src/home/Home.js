import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { data: '' }
    console.log(props);
  }

  render() {
    return(
      <div>
        Super useful warnings database ({this.props.data})
      </div>
    )
  }
}