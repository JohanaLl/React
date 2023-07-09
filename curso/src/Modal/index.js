import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({ children }) {
    //Lo que se quiere teletransportar
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    // a donde se quiere teletransportar
    document.getElementById('modal')
  );
}

export { Modal };