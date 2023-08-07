import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
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
        data-testid="stack"
        style={{ maxHeight: `${height}px` || 'auto', maxWidth: `${width}px` || 'auto' }}
        className={classNames(cls.Stack, {}, [className, cls[childrenPosition]])}
    >
        {children}
    </div>
);
export default memo(Stack);
