import { useTranslation } from 'react-i18next';
import React, { FC, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '@/shared/lib/classNames';
import cls from './Notify.module.scss';

interface Props {
    children: React.ReactNode
    open: boolean
}

const Notify: FC<Props> = ({ children, open }) => {
    const { t } = useTranslation();

    return (
        <CSSTransition
            in={open}
            timeout={400}
            mountOnEnter
            unmountOnExit
            classNames={
                {
                    enterActive: cls.notifyActive,
                    exitActive: cls.notifyExit,
                }
            }
        >
            <div data-testid="notify" className={classNames(cls.Notify, {}, [])}>
                <p>{children}</p>
            </div>
        </CSSTransition>
    );
};

export default memo(Notify);
