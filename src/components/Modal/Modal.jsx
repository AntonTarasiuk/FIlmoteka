import { createPortal } from "react-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sprite from "../../images/sprite.svg";
import { Backdrop, ModalWindow, ModalCloseBtn } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ closeModal, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    },);
    
    const MotionBackdrop = motion(Backdrop);
    const MotionModalWindow = motion(ModalWindow);

    const handleModalClose = () => closeModal();

    const handleKeyDown = e => {
       e.code === "Escape" && closeModal()
    }

    const handleBackdropClick = e => {
        const { target, currentTarget } = e;

        if (target === currentTarget) {
            closeModal();
        }
    }

    return createPortal(
        <AnimatePresence>           
        <MotionBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleBackdropClick}
        >
            <MotionModalWindow
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.25 }}
            >
                <ModalCloseBtn type="button" aria-label="close" onClick={handleModalClose}>
                    <svg width="30" height="30">
                        <use xlinkHref={`${sprite}#icon-close`} />
                    </svg>
                </ModalCloseBtn>
                {children}
            </MotionModalWindow>
        </MotionBackdrop>
        </AnimatePresence>,
        modalRoot
    )
}