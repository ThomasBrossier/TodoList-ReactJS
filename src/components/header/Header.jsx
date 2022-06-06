import React from 'react'
import style from './header.module.scss'
import Logo from './Logo'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
    </div>
  )
}

export default Header