import React from 'react'
import style from './main.module.scss' 
import TodoList from '../components/todoList/TodoList'
import TopBar from '../components/todoList/TopBar'
const Main = () => {
  return (
    <div className={style.container}>
      <div >
         <TopBar/>
      </div>
     <div className={style.board}>
      <TodoList title="un titre"/>
      <TodoList title="un titre"/>
      <TodoList title="un titre"/>
      <TodoList title="un titre"/>
      <TodoList title="un titre"/>
      </div> 
    </div>
  )
}

export default Main