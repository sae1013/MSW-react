import React from 'react';
import TodoItem from './TodoItem';

import classes from './TodoList.module.css';

function TodoList({ todoList }) {
  return (
    <div className={classes.container}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} date={todo.date} />
      ))}
    </div>
  );
}

export default TodoList;
