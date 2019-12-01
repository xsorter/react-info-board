import React from 'react';
import './Noty.sass';

const notyContainer = (WrappedComponent, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      console.log('HOC PROPS', props);
      console.log('HOC DATA', data);
      this.data = data;
    }

    render() {
      return (
        <div>
          <div className="noty">{this.data ? this.data : `Notify Dummy`}</div>
          <WrappedComponent></WrappedComponent>
        </div>
      );
    }
  };
};

export default notyContainer;
