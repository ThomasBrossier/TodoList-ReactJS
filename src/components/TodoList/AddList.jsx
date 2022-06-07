import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, incrementIdList } from '../../feature/todoList.slice';
import DeleteButton from '../buttons/DeleteButton';
import style from './addList.module.scss';

const AddList = () => {
  const dispatch =useDispatch();
  const [active, setActive]= useState(false)
  const [value, setValue] = useState("")
  const updateview = (e)=>{
    e.stopPropagation();
    setActive(false)
  }
  const addNewList = ()=>{
    if(value === ""){
      return
    }
    const list = {
      id : Math.floor(Math.random()*10000),
      title: value,
      tasks : []
    }
    setValue("")
    dispatch(incrementIdList())
    dispatch(addList(list))
  }
  const handleInputChange=(e)=>{
    setValue(e.target.value.trim())
  }
  const activeView = (
    <>
      <input type="text" value={value} onChange={(e)=>handleInputChange(e)} />
      <button type="button" className={style.createList} onClick={()=>addNewList()}>Ajouter une liste</button>
      <DeleteButton typeToDelete="addlist" action={updateview}/>
    </>
  )


  return (
    <div className={active ? style.containerActive : style.container} onClick={()=>setActive(true)}>
        { !active ? <span>+ Ajouter une liste </span> : activeView}
    </div>
  )
}

export default AddList
/*  */