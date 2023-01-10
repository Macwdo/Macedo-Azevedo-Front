import React from "react";

const Modal = ({ id = "modal", onClose = () => {}, children }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id)
            onClose();
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="container-modal">
                <div className="content">{ children }</div>
            </div>
        </div>
    )
};

export default Modal;