import React from 'react'
import { useDispatch } from 'react-redux'
import style from './deleteButton.module.scss'
import {removeList} from '../../feature/todoList.slice'

const DeleteButton = ({typeToDelete,idTask,idList, action }) => {
  const dispatch = useDispatch();

  const removeAction = (e)=>{
    switch (typeToDelete){
      case 'list' : dispatch(removeList(idList));
        break;
      case 'task' : action(e) ; 
        break;
      case 'addlist':  action(e);
        break;  
      default : break;
    }  
  }
  return (
    <button className={style.btnDelete} onClick={(e)=>removeAction(e)}>X</button>
  )
}

export default DeleteButton