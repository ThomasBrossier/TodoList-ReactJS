import React from 'react'

const Input = ({value, handleChange, id = null, errors,className = '', onKeyPress, ...props }) => {
    const Container = {
        width:'100%',
        display:'flex',
        flexFlow : 'column nowrap'
      }
      const InputStyle = {
        width :'90%',
        margin: 'auto',
      }
      const errorStyle = {
        marginTop:'0.2rem',
        color : 'red',
        fontSize: '0.8rem'
      }
  return (
    <div style={Container}>
        <input id={id} autoFocus style={InputStyle} className={className} minLength="2" type="text" value={value} onKeyPress={(e)=>onKeyPress(e)} onChange={(e)=>{
                                                                                                                                handleChange(e)
                                                                                                                                }} />
       {errors === [] ? null : <div style={errorStyle}>
        <ul>
          {
           errors.map((err,index)=><li key={index}>{err}</li>)
        }  
        </ul>
       </div>}
    </div>
  )
}

export default Input