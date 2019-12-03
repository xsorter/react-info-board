import React from 'react';
import './Noty.sass';

const notyContainer = (WrappedComponent, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        type: 'success',
        show: false,
        message: ''
      }

      console.log('HOC DATA', data);
      console.log('PROPS', this.props);
      this.data = data;
    }

    messageHandler = (message) => {
      console.log('MESSAGE', message)
    }

    render() {
      const noty = this.state;
      console.log(noty);
      return (
        <div>
          {noty.show ?
          <div className="noty noty__success">
            <div className="noty__message">
              {noty.message}
            </div>
            <div className="noty__close">
              <span>&#x2716;</span>
            </div>
          </div>
          : null}
          <WrappedComponent onMessageFired={(message) => this.messageHandler(message)} ></WrappedComponent>
        </div>
      );
    }
  };
};

export default notyContainer;
