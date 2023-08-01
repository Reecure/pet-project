import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface Props {
    children: React.ReactNode
}

const Page: FC<Props> = ({ children }) => (
    <section data-testid="page" className={classNames(cls.Page, {}, [])}>
        {children}
    </section>
);

export default memo(Page);
