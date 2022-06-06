import React from 'react'
import DeleteButton from '../buttons/DeleteButton';
import style from "./todo.module.scss";

const Todo = ({id, title, done}) => {
  return (
    <li className={style.todoTask}>
        <input className={style.checkTodo} type="checkbox"  /> 
        {/* checked={done? true:false} */}
        <span>{title}</span>
        <DeleteButton typeToDelete="task"id={id}/>
    </li>
  )
}

export default Todo