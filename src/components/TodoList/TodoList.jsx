import React, { useRef } from 'react'
import style from './todoList.module.scss';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo'
import DeleteButton from '../buttons/DeleteButton';
//  import useModal from '../modal/useModal'
// import Modal from '../modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateList,addTask,addErrors, clearErrors} from '../../feature/list.slice';
import UpdateButton from '../buttons/UpdateButton';
import ProgressBar from '../progressBar/ProgressBar';
import { useEffect } from 'react';
import Input from '../input/Input'; 


const TodoList = ({id, title, tasks = []}) => {

  // const { isShowing, toggle } = useModal();
  let errors = useSelector(state=> state.todos.errors)
  const maxLenght = 40
  const minLenght = 3
  const bottomRef = useRef(null);
  const [isUpdating, setUpdating] = useState(false);
  const [listTitleInput, setListTitle] = useState(title);
  const [progress, setProgress] = useState(0)
  const [addTaskBloc, showAddTaskBloc] = useState(false);
  const [addTaskInput, setAddTaskInput]= useState("")
  const dispatch = useDispatch();
  
 
  const quitAddTask = (e)=>{
    e.stopPropagation();
    showAddTaskBloc(false);
    setAddTaskInput("");
  }
  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  },[tasks])
  const handleChange = (e)=>{
      if (e.target.id === "listTitle"){
        setListTitle(e.target.value)
      }else{
        setAddTaskInput(e.target.value)
      }
      validateChange(e.target.value)
  }
  const updateProgress = (tasks)=>{
    const total = tasks.length;
    let done = 0;
    for(let i = 0 ; i < total ; i++){
      if(tasks[i].done === true ){
        done++
      }
    }
    return done * 100 /total
  }
  useEffect(()=>{
    setProgress(updateProgress(tasks))
  },[tasks])

  const addTaskInState = (e)=>{
    e.stopPropagation();
    let error = validateSubmit('task');
    if(error.length > 0 ){
      dispatch(addErrors(error))
      return
    }
    if(addTaskInput.trim() !== "" ){
      const payload = {
        id,
        task:{ id : Math.floor(Math.random()*1000000),
               title : addTaskInput,
               done : false    
            }
      }
      setAddTaskInput("");
      dispatch(addTask(payload));
    }
  }
  const UpdateListTitle = (e)=>{
    e.stopPropagation();
    if(isUpdating){
      let error = validateSubmit('list')
      setListTitle(listTitleInput.trim())
      if(error.length > 0 ){
        dispatch(addErrors(error))
        return
      }
      const payload = {
        idList : id, 
        title : listTitleInput
      }
      dispatch(updateList(payload))
      setUpdating(false)
    }else{
      setUpdating(true)
    }
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
  const validateSubmit = (from)=>{
    let value = from === 'list' ?  listTitleInput : addTaskInput
    let error = validateChange(value);
    if (value.trim() === ""){
      setAddTaskInput("") && setListTitle("")
      error.push('Veuillez saisir un titre')
    }
    if(value.trim().length < minLenght){
      error.push(' Le titre doit faire au moins 3 caractères')
    }
    return error
  }
  
  const changeView = (event)=>{
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setUpdating(false)
      showAddTaskBloc(false)
      dispatch(clearErrors())
    }
  }
  const enterkeyPress = (e)=>{
    if(e.key === 'Enter'){
      if(e.target.id === 'listTitle'){
        UpdateListTitle(e)
      }else{
        addTaskInState(e)
      }
    }
  }
  return (
    
    <div className={style.container} >
        
            <div className={style.header} onBlur={(e)=>changeView(e)}>
              {isUpdating ? 
            <>
              <Input  value={listTitleInput} id='listTitle' handleChange={handleChange} errors={errors} onKeyPress={enterkeyPress} />
              <div className={style.listbuttons}>
                <UpdateButton action={UpdateListTitle} />
              </div>
            </>  
            :
            <>
              <span className={style.title}>{title}</span>
              <div className={style.listbuttons}>
                <UpdateButton action={UpdateListTitle} />
                <DeleteButton idList={id} typeToDelete="list" />
              </div>
            </>
            
            }
              
                  
            </div>
            <ProgressBar progress={progress} />
            <div className={style.todoList}>
                <ul>
                  <>
                    {tasks.map(task=> <Todo key={task.id} idTask={task.id} idList={id}title={task.title}/>)}
                    <div className={style.addTask}  onBlur={(e)=>changeView(e)} >
                      {addTaskBloc ?
                       <>
                          <Input  value={addTaskInput} id='addTaskTitle' handleChange={handleChange} errors={errors} onKeyPress={enterkeyPress} />
                          <div className={style.buttons}>
                            <button type="button" className={style.addTaskButton} onClick={(e)=>addTaskInState(e)}>Ajouter une tâche</button> 
                            <button type="button" className={style.quitButton} onClick={(e)=>quitAddTask(e)}>Quitter</button>
                          </div>
                       </> :
                       <button className={style.showAddtask} type="button" onClick={(e)=>{e.stopPropagation();showAddTaskBloc(true);}}>Ajouter une tâche</button>
                       }
                      <div ref={bottomRef} />
                    </div>
                  </>
                </ul>
            </div>
        {/* <Modal  isShowing={isShowing} title={"Modifier " + title} hide={toggle}>
            <h4>Titre 2</h4>
            <div>Test</div>
        </Modal> */}
    </div>
    
  )
}

TodoList.propTypes = {
  id : PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id :PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    done : PropTypes.bool.isRequired
  })),
  title: PropTypes.string.isRequired,
};
export default TodoList