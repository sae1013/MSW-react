import React, { useEffect, useState, useMemo } from 'react';
import TodoList from './components/todo/TodoList';
import classes from './App.module.css';
import ProgressBar from './components/ui/ProgressBar';
import InputForm from './components/ui/InputForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(null);

  useEffect(() => {
    // 로컬스토리지 첫 렌더링시 데이터 받아오기. 데이터가없으면 빈 배열로둠
    if (localStorage.getItem('todos') == null) {
      return;
    }
    setTodoList(JSON.parse(localStorage.getItem('todos')));
  }, []);

  const calculateProgressValue = () => {
    if (todoList.length === 0) {
      return 0;
    }
    let cnt = 0;
    todoList.forEach((todo) => {
      if (todo.done) {
        cnt += 1;
      }
    });
    return parseInt((cnt / todoList.length) * 100);
  };

  const progressValue = useMemo(calculateProgressValue, [todoList]);

  const addTodo = (todo) => {
    let newTodos = [...todoList, todo];
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodoList(newTodos);
  };

  const toggleTodo = (id) => {
    let targetIdx = todoList.findIndex((todo) => todo.id === id);
    const newTodos = [...todoList];
    newTodos[targetIdx].done = !newTodos[targetIdx].done;
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodoList(newTodos);
  };

  const deleteTodo = (id) => {
    console.log(id);
    const newTodos = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodoList(newTodos);
  };

  const editTodo = (editedTodo) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        return editedTodo;
      }
      return todo;
    });
    setTodoList(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setEditMode(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.progress}>
        <ProgressBar value={progressValue} />
      </div>
      <div className={classes.contents}>
        <TodoList
          todoList={todoList}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onSetEditMode={setEditMode}
        />
        <InputForm
          onAddTodo={addTodo}
          editMode={editMode}
          onSetEditMode={setEditMode}
          onEditSubmit={editTodo}
        ></InputForm>
      </div>
    </div>
  );
}

export default App;
