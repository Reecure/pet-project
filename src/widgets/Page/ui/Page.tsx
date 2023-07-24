import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import cls from './Page.module.scss';

interface Props {
    children: React.ReactNode
}

const Page:FC<Props> = ({ children }) => (
    <section className={classNames(cls.Page, {}, [])}>
        {children}
    </section>
);

export default memo(Page);
