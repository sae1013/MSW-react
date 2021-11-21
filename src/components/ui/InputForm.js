import React, { useState, useEffect } from 'react';
import classes from './InputForm.module.css';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

function InputForm(props) {
  const { onAddTodo, editMode = false, onSetEditMode, onEditSubmit } = props;
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (editMode) {
      setInputText(editMode.text);
    } else {
      setInputText('');
    }
  }, [editMode]);

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    if (!editMode) {
      // 일반모드
      if (e.key === 'Enter') {
        const todo = { id: uuid(), text: inputText, done: false };
        setInputText('');
        onAddTodo(todo);
      }
    } else {
      //편집모드
      if (e.key === 'Enter') {
        editMode.text = inputText;
        onEditSubmit(editMode);
      }
    }
  };

  const canselEditHandler = () => {
    onSetEditMode(null);
  };

  return (
    <Form>
      {editMode ? <p>수정 중...</p> : null}
      <input
        value={inputText}
        onChange={inputChangeHandler}
        onKeyPress={submitHandler}
        placeholder="오늘은 무엇을 하세요?"
      ></input>
      {editMode ? <button onClick={canselEditHandler}>수정취소</button> : null}
    </Form>
  );
}

const Form = styled.div`
  height: 20%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    position: absolute;
    bottom: 15px;
    left: 40%;
    color: orangered;
  }
  input {
    width: 80%;
    border: 1px solid #3f51b5;
    border-radius: 50px;
    padding: 10px;
    outline: none;
    transition: all 0.3s;
    
    &:focus {
      transition: all 0.3s;
      cursor: pointer;
      width:85%;
    }
  }

  button {
    padding: 5px;
    margin-left: 5px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    background: none;
    transition: color .1s;
    
    &:hover {
      color: red;
    }
  }
`;
export default InputForm;
