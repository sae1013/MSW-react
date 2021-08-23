import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import classes from './Button.module.css';

function Button(props) {
  const submitHanlder = () => {};

  if (props.type === 'float') {
    return (
      <Fab
        onClick={submitHanlder}
        size="large"
        color="primary"
        aria-label="add"
        className={classes.main_float_button}
      >
        <AddIcon />
      </Fab>
    );
  }
}

export default Button;
