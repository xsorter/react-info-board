import React from 'react';
import logo from '../logo.svg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
    console.log(props);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Super useful warnings database ({this.props.data})
        </header>
      </div>
    );
  }
}
