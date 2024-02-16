import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from './Styles';
import { MdOutlineCancel } from "react-icons/md";



const DialogBox = ({ isOpen, hasCloseBtn = true, onClose, children }) => {

    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        console.log("handle close modal")
        setModalOpen(false);
        console.log(modalRef, isOpen)
    };

    const handleKeyDown = (event) => {
        console.log("handle key", event);
        if (event.key === 'Escape') {
            handleCloseModal();

        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
        console.log('isOpen', isModalOpen)
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        console.log('isOpen', isModalOpen)
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isOpen]);


    return (<>
        {isOpen &&
            <div className='dialog-container'>
                <div
                    className='dialog'
                    onKeyDown={handleKeyDown}
                    open={isOpen}>

                    {hasCloseBtn && (

                        <MdOutlineCancel className="modal-close-btn" onClick={handleCloseModal} />

                    )}
                    {children}

                </div>
            </div>}</>
    )
}

export default DialogBox