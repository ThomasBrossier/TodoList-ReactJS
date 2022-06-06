import React from 'react'
import style from './todoList.module.scss';
import Todo from '../todo/Todo'; 

const TodoList = ({title}) => {
  return (
    <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>{title}</div>
          <div className={style.buttons}></div>
        </div>
        <div className={style.todoList}>
            <ul>
               <Todo />
                <Todo />
                <Todo />
            </ul>
        </div>
        
    </div>
  )
}

export default TodoList