import React, { useEffect } from 'react';
import classes from './TodoItem.module.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

function TodoItem(props) {
  const { id, text, done, onToggle, onDelete, onSetEditMode } = props;

  const toggleTodoHandler = () => {
    onToggle(id);
  };

  const deleteTodoHandler = () => {
    onDelete(id);
  };

  const editTodoHandler = () => {
    onSetEditMode({ id, text, done });
  };

  return (
    <React.Fragment>
      <li className={done ? `${classes.transparent}` : null}>
        <div className={classes.text}>{text}</div>
        <div className={classes.action}>
          <button
            className={
              done
                ? `${classes.button} ${classes.doneToggle} ${classes.done}`
                : `${classes.button} ${classes.doneToggle}`
            }
          >
            <CheckCircleOutlineIcon onClick={toggleTodoHandler} />
          </button>
          <button className={`${classes.button} ${classes.delete}`}>
            <DeleteForeverIcon onClick={deleteTodoHandler} />
          </button>
          <button className={`${classes.button} ${classes.edit}`}>
            <EditIcon onClick={editTodoHandler} />
          </button>
        </div>
      </li>
      <hr></hr>
    </React.Fragment>
  );
}

export default TodoItem;
