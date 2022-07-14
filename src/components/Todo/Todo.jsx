import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteButton from '../buttons/DeleteButton';
import style from "./todo.module.scss";
import { removeTask, toggleTask, updateTask} from '../../feature/todoList.slice';
import { useSelector } from 'react-redux';
import UpdateButton from '../buttons/UpdateButton';


const Todo = ({idTask,idList, title}) => {
  const dispatch = useDispatch();
  const [isUpdating, setUpdating] = useState(false)
  const [inputTaskValue, setInputTaskValue] = useState(title)
  const isTaskDone = useSelector(state=>{
    const indexList = state.lists.findIndex((list)=> list.id === idList)
    const indexTask = state.lists[indexList].tasks.findIndex((task)=> task.id === idTask)
    return state.lists[indexList].tasks[indexTask].done                                
  })
  const handleChange = (e)=>{
    setInputTaskValue(e.target.value)
    console.log(inputTaskValue)
  }
  const removeCurrentTask = (e) => {
    e.stopPropagation();
    const payload = {idList,idTask}
    dispatch(removeTask(payload))
  }
  const toggleCurrentTask = (e)=>{
    dispatch(toggleTask({idList,idTask}));
  }

  const updateCurrentTask = (e)=>{
    e.stopPropagation();
    if(isUpdating){
        const payload = {
            idList, 
            idTask, 
            title : inputTaskValue
        }
        dispatch(updateTask(payload))
        setUpdating(false)
    }else{
        setUpdating(true)
    }
}
  return (
    <li className={style.todoTask}>
        <input className={style.checkTodo} type="checkbox"  checked={isTaskDone}  onChange={e=>toggleCurrentTask(e)} /> 
        {isUpdating ?
        <>
          <input className={style.normal} value={inputTaskValue} onChange={handleChange} />
          <div className={style.buttons}>
          <UpdateButton action={updateCurrentTask} /> 
          </div>
        </> 
        :
        <>
         <span className={isTaskDone ? style.crossedOut : style.normal}>{title}</span>
         <div className={style.buttons}>
         <UpdateButton action={updateCurrentTask}/>
        <DeleteButton typeToDelete="task" idList={idList} color='light' idTask={idTask} action={(e)=>removeCurrentTask(e)}/> 
         </div>
        </>   
        }
    </li>
  )
}

Todo.propTypes = {
  idTask : PropTypes.number.isRequired,
  idList: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  done : PropTypes.bool
};
export default Todo