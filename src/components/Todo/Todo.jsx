import React from 'react'
import { useDispatch } from 'react-redux';
import DeleteButton from '../buttons/DeleteButton';
import style from "./todo.module.scss";
import { removeTask, toggleTask } from '../../feature/todoList.slice';
import { useSelector } from 'react-redux';


const Todo = ({idTask,idList, title, done}) => {
  const dispatch = useDispatch();
  const isTaskDone = useSelector(state=>{
    const indexList = state.lists.findIndex((list)=> list.id === idList)
    const indexTask = state.lists[indexList].tasks.findIndex((task)=> task.id === idTask)
    return state.lists[indexList].tasks[indexTask].done                                
  })
  const removeCurrentTask = (e) => {
    e.stopPropagation();
    const payload = {idList,idTask}
    dispatch(removeTask(payload))
  }
  const toggleCurrentTask = (e)=>{
    dispatch(toggleTask({idList,idTask}));
  }
  return (
    <li className={style.todoTask}>
        <input className={style.checkTodo} type="checkbox"  checked={isTaskDone}  onChange={e=>toggleCurrentTask(e)} /> 
        {/* checked={done? true:false} */}
        <span>{title}</span>
        <DeleteButton typeToDelete="task" idList={idList} idTask={idTask} action={(e)=>removeCurrentTask(e)}/>
    </li>
  )
}

export default Todo