import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addList, incrementIdList } from '../../feature/todoList.slice';
import DeleteButton from '../buttons/DeleteButton';
import style from './addList.module.scss';

const AddList = () => {
  const dispatch =useDispatch();
  let countId = useSelector(state=> state.idListCount)
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
      id : countId,
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
      <DeleteButton typeToDelete="addlist" updateview={updateview}/>
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