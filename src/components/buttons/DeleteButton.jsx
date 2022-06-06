import React from 'react'
import { useDispatch } from 'react-redux'
import style from './deleteButton.module.scss'
import {removeList} from '../../feature/todoList.slice'

const DeleteButton = ({typeToDelete,id,updateview}) => {
  const dispatch = useDispatch();

  const removeAction = (e)=>{
    console.log(id + "--------" + typeToDelete)
    if(typeToDelete === 'list'){
      dispatch(removeList(id))
    }else if (typeToDelete ==="task"){

    }else{
      updateview(e)
    }
  }
  return (
    <button className={style.btnDelete} onClick={(e)=>removeAction(e)}>X</button>
  )
}

export default DeleteButton