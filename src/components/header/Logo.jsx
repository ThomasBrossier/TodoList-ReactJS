import React from 'react'
import style from "./logo.module.scss";
import logo from './logo.png';

const Logo = ({src, alt}) => {
  return (
    <div className={style.logo}>
        <img src={logo} alt={alt}/>
    </div>
  )
}

export default Logo