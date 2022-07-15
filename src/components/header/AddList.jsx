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
  const addNewList = (e)=>{
    e.preventDefault()
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
  const changeView = (event)=>{
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActive(false)
    }
  }
  const activeView = (
    <>
      <input autoFocus type="text" value={value} onChange={(e)=>handleInputChange(e)} />
      <div className={style.buttons}>
        <button type="button" id='addListButton' className={style.createList} onClick={(e)=>addNewList(e)}><i className="fa-solid fa-plus"></i> Ajouter une liste</button>
        <DeleteButton typeToDelete="addlist" color='light' action={updateview}/>
      </div>
    </>
  )


  return (
    <div className={active ? style.containerActive : style.container} onBlur={(e)=>changeView(e)} onClick={()=>setActive(true)}>
        { !active ? <span>+ Ajouter une liste </span> : activeView}
    </div>
  )
}

export default AddList
/*  */