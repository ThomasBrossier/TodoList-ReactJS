import React from 'react'
import style from './main.module.scss' 
import TopBar from '../components/TodoList/TopBar'
import TodoList from '../components/TodoList/TodoList'
import { useSelector } from 'react-redux'
const Main = () => {
  const lists = useSelector(state => state.lists)
  return (
    <div className={style.container}>
      <TopBar/>    
      <div className={style.board}>
        {lists.map(list=> <TodoList key={list.id} id={list.id} tasks={list.tasks} title={list.title}/> )}
        </div> 
    </div>
  )
}

export default Main