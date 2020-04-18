import React from 'react';
import MainRouter from '../../../MainRouter/MainRouter';

const checkAuth = {
  isLogined: false,
};

class Authorisation extends React.Component {
  render() {
    return <MainRouter isAuth={checkAuth.isLogined}></MainRouter>;
  }
}

export default Authorisation;
