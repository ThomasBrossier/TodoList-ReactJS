import React ,{useEffect, useState} from 'react'
import style from './main.module.scss' 
import TodoList from '../components/TodoList/TodoList'
import { useSelector } from 'react-redux'
import Loading from '../components/loading/Loading'
import apiFirebase from '../conf/api.firebase';
import { useDispatch } from 'react-redux';
import { loaded,addLists } from '../feature/todoList.slice'
import SnackBarCall from '../components/snackBar/snackBarCall' 
import { datas } from '../fakedata'

const Main = () => {
  const isLoaded = useSelector(state=> state.isLoaded);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch();

  useEffect(() => {
    apiFirebase.get('lists.json')
    .then( response => {
      let lists = response.data ? response.data : [];
      dispatch(addLists(lists));
      dispatch(loaded(true))
    })
    .catch((error=>setError(error)))
  }, [])

  return (
    <div className={style.container}>
      <div className={style.board}>
        <>
        {isLoaded ? lists.map(list=> <TodoList key={list.id} id={list.id} tasks={list.tasks} title={list.title}/> ): <Loading/>}
         { error ? <SnackBarCall  setError={setError} open={open} setOpen={setOpen} error={error} /> : ''} 
        </>
        </div> 
    </div>
  )
}

export default Main