import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CSSTransition } from 'react-transition-group';
import cls from './Modal.module.scss';

type Props = {
    isOpen: boolean
    setIsOpen: () => void
    children?: ReactNode

}

const Modal: FC<Props> = ({ children, isOpen, setIsOpen }) => (
    <CSSTransition
        in={isOpen}
        timeout={400}
        mountOnEnter
        unmountOnExit
        classNames={
            {
                enterActive: cls.modalActive,
                exitActive: cls.modalExit,
            }
        }
    >
        <dialog open className={classNames(cls.Modal, {}, [])} onClick={setIsOpen}>
            <div onClick={(e) => { e.stopPropagation(); }} className={cls.ModalContent}>
                {children}
            </div>
        </dialog>
    </CSSTransition>

);

export default Modal;
