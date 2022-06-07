import React from 'react'
import { useDispatch } from 'react-redux'
import style from './deleteButton.module.scss'
import {removeList} from '../../feature/todoList.slice'

const DeleteButton = ({typeToDelete,id,updateview}) => {
  const dispatch = useDispatch();

  const removeAction = (e)=>{
    switch (typeToDelete){
      case 'list' : dispatch(removeList(id));
        break;
      case 'task' : ; 
        break;
      case 'addlist':  updateview(e);
        break;  
      default : break;
    }  
  }
  return (
    <button className={style.btnDelete} onClick={(e)=>removeAction(e)}>X</button>
  )
}

export default DeleteButton