import React from 'react'
import { useDispatch } from 'react-redux';
import DeleteButton from '../buttons/DeleteButton';
import style from './modal.module.scss';
import { toggleModal } from '../../feature/todoList.slice';
const Modal = ({title, content}) => {
const dispatch = useDispatch();
const updateview = ()=>{
    dispatch(toggleModal())
}
  return (
    <div className={style.screenfilter}>
        <div className={style.wrapper}>
            <header>
                <h3>{title}</h3>
                <DeleteButton updateview={()=>updateview()} />
            </header>
            {content}
        </div>
    </div>
  )
}

export default Modal