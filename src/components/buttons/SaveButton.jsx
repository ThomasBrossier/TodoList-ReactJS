import React, { useState } from 'react'
import style from './saveButton.module.scss'
import apiFirebase from '../../conf/api.firebase';
import { useSelector } from 'react-redux/es/exports';
import SnackBarSave from '../snackBar/snackBarSave';

const SaveButton = () => {
  const [isSaved, setSave] = useState(false);
  const lists = useSelector(state => state.lists)
  const saveTodos = ()=>{
    apiFirebase.put('todos.json', lists)
    .then(setSave(true))
  }
  return (
    <>
    <button type='button' onClick={()=>saveTodos()} className={style.btnSave}>
      <img src="./svg/save.svg" alt='save'/>
    </button>
    {isSaved ? <SnackBarSave/> : ""}
    </>
  )
}

export default SaveButton