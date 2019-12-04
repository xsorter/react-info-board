import React from 'react';
import './Noty.sass';
import { CSSTransition } from 'react-transition-group';

const notyContainer = (WrappedComponent, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        type: 'info',
        show: false,
        message: '',
      };

      console.log('HOC DATA', data);
      console.log('PROPS', this.props);
      this.data = data;
    }

    messageHandler = message => {
      const newMessage = { ...message };
      this.setState(newMessage);

      setTimeout(() => {
        this.setState({
          type: 'general',
          show: false,
          message: '',
        })
      }, 5000)
    };

    closeHandler = () =>{
      this.setState({
        type: 'general',
        show: false,
        message: '',
      });
    }
    render() {
      const noty = this.state;
      console.log(noty);
      return (
        <div>

          <CSSTransition unmountOnExit in={noty.show} timeout={800} classNames="noty-transitions">
            <div className={`noty noty__${noty.type}`}>
              <div className="noty__message">{noty.message}</div>
              <div onClick={this.closeHandler} className="noty__close">
                <span>&#x2716;</span>
              </div>
            </div>
          </CSSTransition >

          <WrappedComponent
            onMessageFired={message => this.messageHandler(message)}
          ></WrappedComponent>
        </div>
      );
    }
  };
};

export default notyContainer;
