import React from "react";
import "../styles/modal.css";

function Modal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <img src={image} alt="Dog" className="modal-image" />
      </div>
    </div>
  );
}

export default Modal;
