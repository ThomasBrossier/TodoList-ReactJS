import React from 'react'
import { useDispatch } from 'react-redux';
import DeleteButton from '../buttons/DeleteButton';
import style from "./todo.module.scss";
import { removeTask } from '../../feature/todoList.slice';

const Todo = ({idTask,idList, title, done}) => {
  const dispatch = useDispatch();
  const removeCurrentTask = (e) => {
    e.stopPropagation();
    const payload = {idList,idTask}
    dispatch(removeTask(payload))
  }
  return (
    <li className={style.todoTask}>
        <input className={style.checkTodo} type="checkbox"  onClick={(e)=>e.stopPropagation()} /> 
        {/* checked={done? true:false} */}
        <span>{title}</span>
        <DeleteButton typeToDelete="task" idList={idList} idTask={idTask} action={(e)=>removeCurrentTask(e)}/>
    </li>
  )
}

export default Todo