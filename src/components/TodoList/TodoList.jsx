import React from 'react'
import style from './todoList.module.scss';
import Todo from '../todo/Todo'; 
import DeleteButton from '../buttons/DeleteButton';
 import useModal from '../modal/useModal'
import Modal from '../modal/Modal';

const TodoList = ({id, title,tasks}) => {

  const { isShowing, toggle } = useModal();
  return (
    
    <div className={style.container} onClick={()=>toggle()}>
        
            <div className={style.header}>
              <div className={style.title}>{title}</div>
              <DeleteButton id={id} typeToDelete="list"/>
            </div>
            <div className={style.todoList}>
                <ul>
                  {tasks.map(task=> <Todo key={task.id} id={task.id} title={task.title} done={task.done}/>)}
                </ul>
            </div>
        <Modal  isShowing={isShowing} title={"Modifier " + title} hide={toggle}>
            <h4>Titre 2</h4>
            <div>Test</div>
        </Modal>
    </div>
    
  )
}

export default TodoList