import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, incrementIdList, clearErrors, addErrors } from '../../feature/list.slice';
import DeleteButton from '../buttons/DeleteButton';
import Input from '../input/Input';
import style from './addList.module.scss';

const AddList = () => {
  const dispatch =useDispatch();
  let errors = useSelector( state => state.todos.errors);
  const maxLenght = 40
  const minLenght = 3
  const [active, setActive]= useState(false)
  const [value, setValue] = useState("")
  const updateview = (e)=>{
    e.stopPropagation();
    setActive(false)
  }

  const addNewList = (e)=>{
    e.preventDefault();
    dispatch(clearErrors())
    let error = [...validateSubmit()];
    console.log(error)
    if(error.length > 0){
      console.log('IL ya a une erreur')
      dispatch(addErrors(error))
      return
    }
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
    dispatch(clearErrors())
    let error=[]
    if(value.length > maxLenght){
      error.push(' Le titre ne peux pas dépasser 40 caractères')
    }
    dispatch(addErrors(error) )
    return error
  }
  const validateSubmit = ()=>{
    let error = validateChange();
    if (value.trim() === ""){
      setValue("")
      return
    }
    if(value.length < minLenght){
      error.push('Le titre doit faire au moins 3 caractères')
    }
    return error
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
    validateChange()
  }
  const changeView = (event)=>{
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setValue("");
      dispatch(clearErrors())
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