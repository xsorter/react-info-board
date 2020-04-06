import React from 'react';
import './NotFound.sass';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <h2>404</h2>
        <p>Something went wrong... Page not found</p>
      </div>
    );
  }
}

export default NotFound;
