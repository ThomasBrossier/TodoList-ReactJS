import React from 'react'
import style from './main.module.scss' 
import TodoList from '../components/todoList/TodoList'
import TopBar from '../components/todoList/TopBar'
import { useSelector } from 'react-redux'
const Main = () => {
  const lists = useSelector(state => state.lists)
  return (
    <div className={style.container}>
      <div >
         <TopBar/>
      </div>
      <div className={style.board}>
        {lists.map(list=> <TodoList key={list.id} id={list.id} tasks={list.tasks} title={list.title}/> )}
        </div> 
    </div>
  )
}

export default Main