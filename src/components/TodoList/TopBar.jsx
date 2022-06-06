import React from 'react'
import style from './topBar.module.scss'

const TopBar = () => {
  return (
    <div className={style.wrapper}>
            <button type="button" className={style.addListButton}>Ajouter une liste</button>
    </div>
  )
}

export default TopBar