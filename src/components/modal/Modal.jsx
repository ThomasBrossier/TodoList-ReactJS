import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.scss"

const Modal = ({ isShowing, hide, title , ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={style.modalOverlay}>
            <div className={style.modalWrapper}>
              <div className={style.modal}>
                <div className={style.modalHeader}>
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className={style.modalCloseButton}
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className={style.modalBody}>{props.children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;