import React, { useEffect, useRef } from 'react'

function ModalDialog({isOpen,children}) {

    const ref = useRef();

    useEffect(()=>{
        if(!isOpen)
        {
            return;
        }
        const dialog = ref.current;
        dialog.showModal();

       return ()=>{
            dialog.close();
        }
       
    },[isOpen])

  return (
    <div>
     
     <dialog ref={ref}>{children}</dialog>
    </div>
  )
}

export default ModalDialog
