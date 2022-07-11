import React from 'react'
import style from './saveButton.module.scss'
import apiFirebase from '../../conf/api.firebase';
import { useSelector } from 'react-redux/es/exports';



const SaveButton = () => {

  const lists = useSelector(state => state.lists)
  const saveTodos = ()=>{
    apiFirebase.put('todos.json', lists)
  }
  return (
    <button type='button' onClick={()=>saveTodos()} className={style.btnSave}>
      <img src="./svg/save.svg" alt='save'/>
    </button>
  )
}

export default SaveButton