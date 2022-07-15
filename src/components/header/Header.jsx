import React from 'react'
import style from './header.module.scss'
import Logo from './Logo'
import SaveButton from '../buttons/SaveButton'
import AddList from './AddList'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
      <div className={style.buttons}>
        <AddList/>  
        <SaveButton/>
      </div>
    </div>
  )
}

export default Header