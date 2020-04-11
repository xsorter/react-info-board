import React from 'react';
import MainRouter from '../../../MainRouter/MainRouter';

const checkAuth = {
  isLogined: true,
};

class Authorisation extends React.Component {
  render() {
    return (
      <React.Fragment>
        {checkAuth.isLogined ? <MainRouter></MainRouter> : <div>AUTH</div>}
      </React.Fragment>
    );
  }
}

export default Authorisation;
