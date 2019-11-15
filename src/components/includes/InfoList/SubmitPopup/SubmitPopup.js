import React from 'react';
import './SubmitPopup.sass';
import Button from '@material-ui/core/Button';

const SubmitPopup = props => {
  console.log(props);
  return (
    <div className="submit-popup">
      <p>{props.message}</p>
      <div className="submit-popup__buttons">
        <Button
          onClick={() => props.click('Delete')}
          variant="outlined"
          size="medium"
          color="primary"
        >
          Yes
        </Button>
        <Button
          onClick={() => props.click('Reject')}
          variant="outlined"
          size="medium"
          color="secondary"
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default SubmitPopup;
