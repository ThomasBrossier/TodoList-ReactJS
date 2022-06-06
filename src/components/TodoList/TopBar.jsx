import React from 'react'
import AddList from './AddList'
import style from './topBar.module.scss'

const TopBar = () => {
  return (
    <div className={style.wrapper}>
            <AddList/>
    </div>
  )
}

export default TopBar