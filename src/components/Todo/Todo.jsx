import React from 'react'
import style from "./todo.module.scss";

const Todo = () => {
  return (
    <li className={style.todoTask}>
        <input className={style.checkTodo} type="checkbox" name="" id="" />
        <span>Test</span>
        <button className={style.removeTask}>X</button>
    </li>
  )
}

export default Todo