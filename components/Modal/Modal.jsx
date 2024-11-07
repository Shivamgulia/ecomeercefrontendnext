import React, { useState, useEffect } from "react";
import styles from "@/styles/components/Modal/Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={handleClose}>
                X
              </button>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
