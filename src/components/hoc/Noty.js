import React from 'react';

const notyContainer = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
      return <WrappedComponent></WrappedComponent>;
    }
  };
};

export default notyContainer;
