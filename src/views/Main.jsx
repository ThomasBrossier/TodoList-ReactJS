import React from 'react'
import style from './main.module.scss' 
import TodoList from '../components/todoList/TodoList'
const Main = () => {
  return (
    <div className={style.container}>
      <TodoList title="un titre"/>
    </div>
  )
}

export default Main