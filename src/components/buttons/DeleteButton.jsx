import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import style from './deleteButton.module.scss'
import {removeList} from '../../feature/todoList.slice'

const DeleteButton = ({typeToDelete,color='dark',idList, action }) => {
  const dispatch = useDispatch();

  const removeAction = (e)=>{
    switch (typeToDelete){
      case 'list' : dispatch(removeList(idList));
        break;
      case 'task' : action(e) ; 
        break;
      case 'addlist':  action(e);
        break;  
      default : break;
    }  
  }
  return (
    <button className={`${style.btn} ${color === 'light'? style.btnLight : null}`} onClick={(e)=>removeAction(e)}><i className="fa-solid fa-xmark"></i></button>
  )
}

DeleteButton.propTypes = {
  typeToDelete : PropTypes.oneOf(['list','task','addlist']).isRequired,
  idTask: PropTypes.number,
  idList: PropTypes.number,
  action : PropTypes.func
};

export default DeleteButton