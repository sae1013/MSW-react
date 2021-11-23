import React, { useEffect, useState, useMemo, useCallback } from 'react';

import TodoList from './components/todo/TodoList';
import classes from './App.module.css';
import ProgressBar from './components/ui/ProgressBar';
import InputForm from './components/ui/InputForm';

type Todo = {
  id: string
  text:string
  done:boolean
} 

function App():JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTarget,setEditTarget] = useState<Todo|null>(); 

  useEffect(() => {
    //  첫 렌더링시 로컬스토리지의 데이터 받아오기.
    if (localStorage.getItem('todos') == null) {
      return;
    }else
    setTodoList(JSON.parse(localStorage.getItem('todos') || '[]'));
  }, []);

  const calculateProgressValue = ():number => {
    const progress:number = todoList.reduce((acc,todo)=>{
      return todo.done ? acc+1 : acc
    },0);
    return (progress / todoList.length) * 100;
  };

  const progressValue:number = useMemo(calculateProgressValue, [todoList]);

  const addTodo = (todo:Todo):void => {
    let newTodos = [...todoList, todo];
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodoList(newTodos);
  };

  const toggleTodo = useCallback((id:string):void => {
    setTodoList((todoList:Todo[]) => {
      let targetIdx:number = todoList.findIndex((todo:Todo) => todo.id === id);
      const newTodos:Todo[] = [...todoList];
      newTodos[targetIdx].done = !newTodos[targetIdx].done;
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  },[]);
  
  const deleteTodo = useCallback((id:string) => {  
    setTodoList((todoList:Todo[])=>{
      const newTodos = todoList.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    })
    
  },[]);
  
  const editTodo = (newEditTodo:Todo) => {  
    const newTodos:Todo[] = todoList.map((todo:Todo) => {
      if (todo.id === newEditTodo.id) {
        return newEditTodo;
      }
      return todo;
    });
    setTodoList(newTodos);
    setEditMode(false);
    setEditTarget(null);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    
    
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
          onSetEditTarget = {setEditTarget}
        />
        <InputForm
          onAddTodo={addTodo}
          editMode={editMode}
          onSetEditMode={setEditMode}
          onEditSubmit={editTodo}
          editTarget = {editTarget as Todo}
        ></InputForm>
      </div>
    </div>
  );
}

export default App;
