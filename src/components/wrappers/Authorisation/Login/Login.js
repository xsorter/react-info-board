import React from 'react';
import './Login.sass';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  loginHandler() {
    this.props.isLogined(true);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Here will be FORM for
        <span>Login</span>
        <div>
          <button
            className="login__button login__button-in"
            onClick={() => this.props.isLogined(true)}
            type="button"
          >
            LOGIN
          </button>
          <button
            className="login__button login__button-out"
            onClick={() => this.props.isLogined(false)}
            type="button"
          >
            SIGN OUT
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
