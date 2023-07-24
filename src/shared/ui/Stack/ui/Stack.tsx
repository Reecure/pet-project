import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC } from 'react';
import cls from './Stack.module.scss';

export enum StackPosition {
    CENTER = 'center',
    RIGHT = 'right'
}

interface Props {
    children: React.ReactNode
    childrenPosition?: StackPosition
    className?: string
    width?: number,
    height?: number
}

const Stack: FC<Props> = ({
    children, childrenPosition, className, height, width,
}) => (
    <div
        style={{ maxHeight: `${height}px` || 'auto', maxWidth: `${width}px` || 'auto' }}
        className={classNames(cls.Stack, {}, [className, cls[childrenPosition]])}
    >
        {children}
    </div>
);
export default Stack;
