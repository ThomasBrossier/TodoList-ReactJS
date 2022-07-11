import React from 'react'
import style from './main.module.scss' 
import TopBar from '../components/TodoList/TopBar'
import TodoList from '../components/TodoList/TodoList'
import { useSelector } from 'react-redux'
import Loading from '../components/loading/Loading'
const Main = () => {
  const isLoaded = useSelector(state=> state.isLoaded);
  const lists = useSelector(state => state.lists)
  return (
    <div className={style.container}>
      <TopBar/> 
      <div className={style.board}>
        {isLoaded ? lists.map(list=> <TodoList key={list.id} id={list.id} tasks={list.tasks} title={list.title}/> ): <Loading/>}
        </div> 
    </div>
  )
}

export default Main