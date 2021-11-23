import React from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

type Todo  = {
  id: string
  text:string
  done:boolean
} 

interface TodoListProps{
  todoList:Todo[],
  onToggle:(id:string)=> void,
  onDelete: (id:string)=> void,
  onSetEditMode: (editMode:boolean) => void,
  onSetEditTarget:(todo:Todo) => void
}

function TodoList({ todoList, onToggle, onDelete, onSetEditMode,onSetEditTarget }:TodoListProps) {
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
          onSetEditTarget = {onSetEditTarget}
        />
      ))}
    </div>
  );
}

export default TodoList;
