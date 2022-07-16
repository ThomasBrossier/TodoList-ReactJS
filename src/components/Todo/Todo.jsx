import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteButton from '../buttons/DeleteButton';
import style from "./todo.module.scss";
import { removeTask, toggleTask, updateTask, clearErrors, addErrors} from '../../feature/list.slice';
import { useSelector } from 'react-redux';
import UpdateButton from '../buttons/UpdateButton';
import Input from '../input/Input';


const Todo = ({idTask,idList, title}) => {
  const dispatch = useDispatch();
  const maxLenght = 40
  const minLenght = 3
  let errors = useSelector(state=> state.todos.errors)
  const [isUpdating, setUpdating] = useState(false)
  const [inputTaskValue, setInputTaskValue] = useState(title)
  const isTaskDone = useSelector(state=>{
    const indexList = state.todos.lists.findIndex((list)=> list.id === idList)
    const indexTask = state.todos.lists[indexList].tasks.findIndex((task)=> task.id === idTask)
    return state.todos.lists[indexList].tasks[indexTask].done                                
  })
  const handleChange = (e)=>{
    setInputTaskValue(e.target.value)
    validateChange(e.target.value)
  }
  const removeCurrentTask = (e) => {
    e.stopPropagation();
    const payload = {idList,idTask}
    dispatch(removeTask(payload))
  }
  const toggleCurrentTask = (e)=>{
    dispatch(toggleTask({idList,idTask}));
  }
  const validateChange = (value)=>{
    dispatch(clearErrors())
    let error=[]
    if(value.length > maxLenght){
      error.push(' Le titre ne peux pas dépasser 40 caractères')
    }
    dispatch(addErrors(error))
    return error
  }
  const validateSubmit = ()=>{
    let error = validateChange(inputTaskValue);
    if (inputTaskValue.trim() === ""){
      setInputTaskValue("")
      error.push('Veuillez saisir un titre')
    }
    if(inputTaskValue.trim().length < minLenght){
      error.push(' Le titre doit faire au moins 3 caractères')
    }
    return error
  }
  
  const updateCurrentTask = (e)=>{
    e.stopPropagation();
    if(isUpdating){
      let error = validateSubmit('list')
      if(error.length > 0 ){
        dispatch(addErrors(error))
        return
      }
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
const changeView = (event)=>{
  if (!event.currentTarget.contains(event.relatedTarget)) {
    setUpdating(false)
  }
}
const enterkeyPress = (e)=>{
  if(e.key === 'Enter'){
    updateCurrentTask(e)
  }
}
  return (
    <li className={style.todoTask} onBlur={(e)=>changeView(e)}>
        <input className={style.checkTodo} type="checkbox"  checked={isTaskDone}  onChange={e=>toggleCurrentTask(e)} /> 
        {isUpdating ?
        <>
          <Input  value={inputTaskValue} id='listTitle' className={style.normal}  handleChange={handleChange} errors={errors} onKeyPress={enterkeyPress} />
          <div className={style.buttons}>
          <UpdateButton action={updateCurrentTask} /> 
          </div>
        </> 
        :
        <>
         <span className={isTaskDone ? style.crossedOut : style.normal}>{title}</span>
         <div className={style.buttons}>
         <UpdateButton action={updateCurrentTask}/>
        <DeleteButton typeToDelete="task" idList={idList} idTask={idTask} action={(e)=>removeCurrentTask(e)}/> 
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