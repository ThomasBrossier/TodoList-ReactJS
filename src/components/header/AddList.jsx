import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, incrementIdList } from '../../feature/todoList.slice';
import DeleteButton from '../buttons/DeleteButton';
import Input from '../input/Input';
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
    e.preventDefault();
    if (value.trim() === ""){
      setValue("")
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
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  const changeView = (event)=>{
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setValue("");
      setActive(false)
    }
  }
  const enterkeyPress = (e)=>{
    if(e.key === 'Enter'){
      addNewList(e)
    }
  }
  const activeView = (
    <>
      {/* <input autoFocus type="text" value={value} onKeyPress={(e)=>EnterkeyPress(e)} onChange={(e)=>{
                                                                                                     handleInputChange(e)
                                                                                                     validate()}} />
       {errorInput === "" ? null : <span>{errorInput}</span>} */}
      <Input handleChange={handleChange} value={value} setValue={setValue} onKeyPress={enterkeyPress}/>
      <div className={style.buttons}>
        <button type="button" id='addListButton' className={style.createList} onClick={(e)=>addNewList(e)} ><i className="fa-solid fa-plus"></i> Ajouter une liste</button>
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