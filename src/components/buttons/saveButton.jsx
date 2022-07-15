import React, { useState } from 'react'
import style from './saveButton.module.scss'
import apiFirebase from '../../conf/api.firebase';
import { useSelector } from 'react-redux/es/exports';
import SnackBarSave from '../snackBar/snackBarSave';

const SaveButton = () => {
  const [open, setOpen] = useState(false);
  const [error,setError] = useState(null)
  const duration = 3000;
  const lists = useSelector(state => state.lists)

  const saveTodos = ()=>{
    apiFirebase.put('todos.json', lists)
    .then(setOpen(true))
    .catch((error)=>setError(error))
  }
  return (
    <>
    <button type='button' onClick={()=>saveTodos()} className={style.btnSave}>
      <img src="./svg/save.svg" alt='save'/>
    </button>
    {open ? <SnackBarSave open={open} setOpen={setOpen} error={error} duration={duration}/> : ""}
    </>
  )
}

export default SaveButton