import React from 'react'
import ModalDialog from './ModalDialog';
import { useState } from 'react';
function Modal() {
    const [show,setShow] = useState(false)
  return (
    <div>
         <button onClick={()=>{setShow(true)}}>
        Open Modal
      </button>

   <ModalDialog isOpen={show}>

    <h1>Hello Alert</h1>
    <button onClick={()=>{setShow(false)}}>Close</button>

   </ModalDialog>
    </div>
  )
}

export default Modal
