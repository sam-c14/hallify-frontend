import React, { useRef } from "react";

// type ModalWrapperProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   children: ReactNode;
//   fullscreen?: boolean;
// };

const ModalWrapper = ({ isOpen, onClose, children, fullscreen }) => {
  const dialogRef = useRef < HTMLDialogElement > null;

  // Open/Close dialog when isOpen changes
  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={`modal-wrapper ${fullscreen ? "dialog-fullscreen" : ""}`}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <button className="dialog-close" onClick={onClose}>
        &times;
      </button>
      {children}
    </dialog>
  );
};

export default ModalWrapper;
