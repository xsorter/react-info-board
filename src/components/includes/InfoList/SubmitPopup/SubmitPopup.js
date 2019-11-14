import React from 'react';
import './SubmitPopup.sass';
import Button from '@material-ui/core/Button';

const SubmitPopup = props => {
  console.log(props);
  return (
    <div className="submit-popup">
      <p>{props.message}</p>
      <div className="submit-popup__buttons">
        <Button onClick={props.click} variant="outlined" size="small" color="primary">
          Yes
        </Button>
        <Button variant="outlined" size="small" color="secondary">
          No
        </Button>
      </div>
    </div>
  );
};

export default SubmitPopup;
