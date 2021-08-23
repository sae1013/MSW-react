import React from 'react';
import TodoList from './components/todo/TodoList';
import { todoList } from './data/dummy-data';
import classes from './App.module.css';
import Button from './components/ui/Button';
import ProgressBar from './components/ui/ProgressBar';

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.progress}>
        <ProgressBar value={50} />
      </div>
      <div className={classes.contents}>
        <TodoList todoList={todoList} />
      </div>
      <footer>
        <Button type="float"></Button>
      </footer>
    </div>
  );
}

export default App;
