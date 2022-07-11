import React from 'react'
import style from '../loading/loading.module.scss';

const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <img alt="loading gif" src="https://i.redd.it/ounq1mw5kdxy.gif" />
    </div>
  )
}

export default Loading

