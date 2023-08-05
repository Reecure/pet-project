import {FC, memo, ReactNode} from 'react';
import {CSSTransition} from 'react-transition-group';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

export enum ModalPositions {
    CENTER = 'center',
}

type Props = {
    isOpen: boolean
    setIsOpen: () => void
    children?: ReactNode
    className?: string
    childrenPosition?: ModalPositions
}

const Modal: FC<Props> = ({
                              children, isOpen, setIsOpen, childrenPosition, className,
                          }) => (
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
        <dialog
            data-testid="modal"
            open
            className={classNames(cls.Modal, {}, [cls[childrenPosition], className])}
            onClick={setIsOpen}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={classNames(cls.ModalContent, {}, [className])}
            >
                {children}
            </div>
        </dialog>
    </CSSTransition>

);

export default memo(Modal);
