import React, {FC, InputHTMLAttributes, memo} from 'react';
import {classNames} from '@/shared/lib/classNames';
import cls from './Input.module.scss';

export const enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BORDER_BOTTOM = 'borderBottom'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: ThemeInput
    className?: string
}

const Input: FC<InputProps> = ({
                                   theme,
                                   className,
                                   ...otherProps
                               }) => (

    <input
        data-testid='input'
        {...otherProps}

        className={classNames(cls.Input, {}, [className, cls[theme]])}
    />

);

export default memo(Input);
