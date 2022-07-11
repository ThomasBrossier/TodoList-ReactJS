import React from 'react';
import style from './saveButton.module.scss';
import apiFirebase from '../../conf/api.firebase';

const saveButton = () => {

   const saveFavoris = ()=>{
        apiFirebase.put('TodoLists.json', this.state.favoris)
      }
  return (
    <button className={style.btnSave} onClick={()=>saveFavoris()}></button>
  )
}

export default saveButton