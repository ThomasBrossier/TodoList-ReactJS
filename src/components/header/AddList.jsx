import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, incrementIdList } from '../../feature/list.slice';
import DeleteButton from '../buttons/DeleteButton';
import Input from '../input/Input';
import style from './addList.module.scss';

const AddList = () => {
  const dispatch =useDispatch();
  const [errors, setErrors]= useState([])
  const [active, setActive]= useState(false)
  const [value, setValue] = useState("")
  const updateview = (e)=>{
    e.stopPropagation();
    setActive(false)
  }

  const addNewList = (e)=>{
    e.preventDefault();
    validateSubmit();
    if(errors === []){
      return
    }
    console.log(errors)
    const list = {
      id : Math.floor(Math.random()*10000),
      title: value.trim(),
      tasks : []
    }
    setValue("")
    dispatch(incrementIdList())
    dispatch(addList(list))
  }
  const validateChange = ()=>{
    let error=[]
    if(value.length > 30){
      error.push(' Le titre ne peux pas dépasser 30 caractères')
    }
    setErrors(error)
    return error
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
    validateChange();
  }
  const changeView = (event)=>{
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setValue("");
      setErrors([])
      setActive(false)
    }
  }
  const enterkeyPress = (e)=>{
    if(e.key === 'Enter'){
      addNewList(e)
    }
  }

  const validateSubmit = ()=>{
    let error = validateChange();
    if (value.trim() === ""){
      setValue("")
      return
    }
    if(value.length < 3){
      error.push(' Le titre doit faire au moins 3 caractères')
    }
    setErrors(error);
  }
  
  const activeView = (
    <>
      {/* <input autoFocus type="text" value={value} onKeyPress={(e)=>EnterkeyPress(e)} onChange={(e)=>{
                                                                                                     handleInputChange(e)
                                                                                                     validate()}} />
       {errorInput === "" ? null : <span>{errorInput}</span>} */}
      <Input handleChange={handleChange} value={value} errors={errors} onKeyPress={enterkeyPress}/>
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