import React from 'react'
import CloseButton from '../buttons/CloseButton';
import style from "./todo.module.scss";

const Todo = () => {
  return (
    <li className={style.todoTask}>
        <input className={style.checkTodo} type="checkbox" name="" id="" />
        <span>Test</span>
        <CloseButton/>
    </li>
  )
}

export default Todo