import React from 'react';
import MainRouter from '../../../MainRouter/MainRouter';

const checkAuth = {
  isLogined: true,
};

class Authorisation extends React.Component {
  render() {
    return <MainRouter isAuth={checkAuth.isLogined}></MainRouter>;
  }
}

export default Authorisation;
