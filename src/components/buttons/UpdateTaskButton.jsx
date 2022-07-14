import React from 'react'
import style from './updateTaskButton.module.scss'

const UpdateTaskButton = ({action}) => {


  return (
    <button type='button' onClick={(e)=>action(e)} className={style.btnUpdate}>
      <i className="fa-solid fa-pen-to-square"></i>
    </button>
  )
}

export default UpdateTaskButton