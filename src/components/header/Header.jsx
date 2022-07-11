import React from 'react'
import style from './header.module.scss'
import Logo from './Logo'
import SaveButton from '../buttons/SaveButton'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
      <SaveButton/>
    </div>
  )
}

export default Header