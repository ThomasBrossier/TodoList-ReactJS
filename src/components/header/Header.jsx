import React from 'react'
import style from './header.module.scss'
import Logo from './Logo'
import SaveButton from '../buttons/SaveButton'
import AddList from '../TodoList/AddList'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
      <AddList/>
      <SaveButton/>
    </div>
  )
}

export default Header