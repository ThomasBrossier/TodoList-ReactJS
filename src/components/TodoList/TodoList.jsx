import React from 'react'
import style from './todoList.module.scss';
import Todo from '../todo/Todo'; 
import CloseButton from '../buttons/CloseButton';

const TodoList = ({title}) => {
  return (
    <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>{title}</div>
          <CloseButton/>
          
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