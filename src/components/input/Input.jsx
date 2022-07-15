import React, { useState } from 'react'

const Input = ({value, setValue, handleChange, onKeyPress}) => {
    const [errorInput ,setErrorInput] = useState('')
    const validate = ()=>{
        let error=""
        if(value.length > 10){
          error += ' Le titre ne peux pas dépasser 30 caractères'
        }
        if(value.length < 2){
            error += ' Le titre doit faire au moins 2 caractères'
        }

        setErrorInput(error)
      }
    const Container = {
        width:'100%',
        display:'flex',
        flexFlow : 'column nowrap'
      }
      const InputStyle = {
        width :'90%',
        margin: 'auto',
      }
      const error = {
        marginTop:'0.2rem',
        color : 'red',
        fontSize: '0.8rem'
      }
  return (
    <div style={Container}>
        <input autoFocus style={InputStyle} minlength="2" type="text" value={value} onKeyPress={(e)=>onKeyPress(e)} onChange={(e)=>{
                                                                                                     handleChange(e)
                                                                                                     }} />
       {errorInput === "" ? null : <span style={error}>{errorInput}</span>}
    </div>
  )
}

export default Input