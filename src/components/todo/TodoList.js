import React from 'react';
import TodoItem from './TodoItem';

import classes from './TodoList.module.css';

function TodoList({ todoList, onToggle, onDelete, onSetEditMode }) {
  return (
    <div className={classes.container}>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          onToggle={onToggle}
          onDelete={onDelete}
          onSetEditMode={onSetEditMode}
        />
      ))}
    </div>
  );
}

export default TodoList;
