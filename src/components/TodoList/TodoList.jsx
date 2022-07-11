import React from 'react'
import style from './todoList.module.scss';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo'
import DeleteButton from '../buttons/DeleteButton';
//  import useModal from '../modal/useModal'
// import Modal from '../modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../feature/todoList.slice';


const TodoList = ({id, title,tasks}) => {

  // const { isShowing, toggle } = useModal();
  const [addTaskBloc, showAddTaskBloc] = useState(false);
  const [addTaskInput, setAddTaskInput]= useState("")
  const dispatch = useDispatch();

  const quitAddTask = (e)=>{
    e.stopPropagation();
    showAddTaskBloc(false);
    setAddTaskInput("");
  }
  const addTaskInState = (e)=>{
    e.stopPropagation();
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
  return (
    
    <div className={style.container}>
        
            <div className={style.header}>
              <div className={style.title}>{title}</div>
                  <DeleteButton idList={id} typeToDelete="list" />
            </div>
            <div className={style.todoList}>
                <ul>
                  <>
                    {tasks.map(task=> <Todo key={task.id} idTask={task.id} idList={id}title={task.title}/>)}
                    <div className={style.addTask}>
                      {addTaskBloc ?
                       <>
                          <input type="text" value={addTaskInput} onChange={(e)=>setAddTaskInput(e.target.value)} onClick={(e)=>e.stopPropagation()}placeholder="" />
                          <div className={style.buttons}>
                            <button type="button" className={style.addTaskButton} onClick={(e)=>addTaskInState(e)}>Ajouter une tâche</button> 
                            <button type="button" className={style.quitButton} onClick={(e)=>quitAddTask(e)}>Quitter</button>
                          </div>
                       </> :
                       <button className={style.showAddtask} type="button" onClick={(e)=>{e.stopPropagation();showAddTaskBloc(true)}}>Ajouter une tâche</button>
                       }
         
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
  })).isRequired,
  title: PropTypes.string.isRequired,
};
export default TodoList