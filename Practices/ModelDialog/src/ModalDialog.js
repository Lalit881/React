import React, { useEffect, useRef } from "react";

function ModalDialog({ isOpen, children }) {
  const dialref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = dialref.current;
    dialog.showModal();

    return () => {
      dialog.close(); //cleanup function: it is run when the component is unmunted or the change the value of dependencie array
    }; // when change the value of dependecie then first call the cleanup function before the effect change
  }, [isOpen]);

  return (
    <div>
      <dialog ref={dialref}>{children}</dialog>
    </div>
  );
}

export default ModalDialog;
