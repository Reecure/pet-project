import { useTranslation } from 'react-i18next';
import React, { FC, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '@/shared/lib/classNames';
import cls from './Notify.module.scss';

interface Props {
    children: React.ReactNode
    error?: boolean
    open: boolean
}

const Notify: FC<Props> = ({ children, open, error }) => {
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
            <div data-testid="notify" className={classNames(cls.Notify, { [cls.error]: error }, [])}>
                <p>{children}</p>
            </div>
        </CSSTransition>
    );
};

export default memo(Notify);
