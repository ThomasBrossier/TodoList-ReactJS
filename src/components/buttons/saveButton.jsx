import React, { useState } from 'react'
import style from './saveButton.module.scss'
import apiFirebase from '../../conf/api.firebase';
import SnackBarCall from '../snackBar/SnackBarCall';
import { useSelector } from 'react-redux/es/exports';


const SaveButton = () => {
  const [open, setOpen] = useState(false);
  const [error,setError] = useState(null)
  const duration = 3000;
  const lists = useSelector(state => state.todos.lists)

  const saveTodos = ()=>{
    apiFirebase.put('lists.json', lists)
    .catch((error)=>setError(error))
    .finally(()=> setOpen(true))
  }
  return (
    <>
    <button type='button' onClick={()=>saveTodos()} className={style.btnSave}>
      <img src="./svg/save.svg" alt='save'/>
    </button>
    {open ? <SnackBarCall open={open} message={'Vos listes ont été sauvegardé !'} setError={setError} setOpen={setOpen} error={error} duration={duration}/> : ""}
    </>
  )
}

export default SaveButton