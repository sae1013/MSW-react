import React from 'react';
import classes from './TodoItem.module.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function TodoItem(props) {
  const { text, date } = props;

  return (
    <React.Fragment>
      <li>
        <div className={classes.text}>{text}</div>
        <div className={classes.action}>
          <button className={`${classes.button} ${classes.done}`}>
            <CheckCircleOutlineIcon />
          </button>
          <button className={`${classes.button} ${classes.delete}`}>
            <DeleteForeverIcon />
          </button>
        </div>
      </li>
      <hr></hr>
    </React.Fragment>
  );
}

export default TodoItem;
