import React, { useRef, useEffect } from "react";

const ModalWrapper = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  if (!isOpen) return null; // Ensure nothing renders when closed

  return (
    <div className="fixed inset-0 flex justify-center items-center  w-screen h-screen -z-10">
      <dialog
        ref={dialogRef}
        className="bg-white sm:min-w-auto min-w-[85vw] p-6 rounded-lg shadow-lg"
        style={{
          position: "", // Force it to obey centering rules
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Perfect centering trick
          border: "none",
          maxWidth: "90vw",
          maxHeight: "80vh",
          overflow: "auto",
          zIndex: -50,
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) onClose();
        }}
      >
        {children}
      </dialog>
    </div>
  );
};

export default ModalWrapper;
