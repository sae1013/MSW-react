import React, { useEffect } from 'react';
import classes from './TodoItem.module.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

type Todo ={
  id:string,
  text:string,
  done:boolean,
}

interface TodoItemProps {
  id:string
  text:string,
  done:boolean,
  onToggle:(id:string)=> void,
  onDelete: (id:string)=> void,
  onSetEditMode: (editMode:boolean) => void,
  onSetEditTarget: (todo:Todo)=>void
}
function TodoItem({id, text, done, onToggle, onDelete, onSetEditMode,onSetEditTarget}:TodoItemProps) {
  
  const toggleTodoHandler = () => {
    onToggle(id);
  };

  const deleteTodoHandler = () => {
    onDelete(id);
  };

  const editTodoHandler = () => { 
    onSetEditTarget({id,text,done});
    onSetEditMode(true);
  };
  
  return (
    <React.Fragment>
      <li className={done ? `${classes.transparent}` : ''}>
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

export default React.memo(TodoItem);
