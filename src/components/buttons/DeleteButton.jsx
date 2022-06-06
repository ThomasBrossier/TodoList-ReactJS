import React from 'react'
import { useDispatch } from 'react-redux'
import style from './deleteButton.module.scss'
import {removeList, toggleModal} from '../../feature/todoList.slice'

const DeleteButton = ({typeToDelete,id,updateview}) => {
  const dispatch = useDispatch();

  const removeAction = (e)=>{
    if(typeToDelete === 'list'){
      dispatch(removeList(id))
    }else if (typeToDelete ==="task"){

    }else if(typeToDelete === "addlist" ){
      updateview(e)
    }else{
      updateview()
    }
  }
  return (
    <button className={style.btnDelete} onClick={(e)=>removeAction(e)}>X</button>
  )
}

export default DeleteButton